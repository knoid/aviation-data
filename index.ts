import { glob } from 'glob';
import { spawn } from 'node:child_process';
import { copyFile, mkdir as fsMkDir, writeFile as fsWriteFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Airport } from './types';

async function mkdir(...paths: string[]) {
  const dir = join(...paths);
  await fsMkDir(dir, { recursive: true });
  return dir;
}

async function writeFile(path: string, fileName: string, data: any) {
  await fsWriteFile(`${join(path, fileName)}.json`, JSON.stringify(data), 'utf-8');
}

async function getUpdatedAt(filePath: string) {
  const fileLog = await new Promise<string>((resolve, reject) => {
    const gitLog = spawn('git', ['log', '--date=unix', '--max-count=1', '--', filePath]);
    gitLog.stderr.on('data', (data) => reject(new Error(data.toString())));
    let returnValue = '';
    gitLog.stdout.on('data', (data) => (returnValue += data.toString()));
    gitLog.on('close', () => {
      if (returnValue.length > 0) {
        resolve(returnValue);
      } else {
        reject(new Error('No data!'));
      }
    });
  });
  const [, unixEpoch] = fileLog.match(/Date:\s+(\d+)/)!;
  return new Date(Number(unixEpoch) * 1000);
}

function getCountryCode(filePath: string) {
  return filePath.split('/').reverse()[1];
}

interface WithTimestamp {
  updatedAt: Date;
}

type AirportWithTimestamp = Airport & WithTimestamp & { countryCode: string };

type BooleanOrString<T> = {
  [key in keyof Required<T>]: T[key] extends boolean | string ? key : never;
}[keyof T];
type Stringify<T> = T extends boolean ? 'true' | 'false' : T;
type GroupedAirport<Keys extends BooleanOrString<Airport>> = {
  [key in Keys]: { [value in Stringify<Airport[key]>]: AirportWithTimestamp[] };
};

const filterFields = ['condition', 'controlled', 'type'] as const;
const filterBy: GroupedAirport<(typeof filterFields)[number]> = {
  condition: { private: [], public: [] },
  controlled: { false: [], true: [] },
  type: { airport: [], helipad: [] },
};

async function main() {
  const distDir = await mkdir('.', 'dist');
  const dataFiles = await glob('./data/*/*.ts');
  for await (const filePath of dataFiles) {
    const countryCode = getCountryCode(filePath);
    const updatedAt = await getUpdatedAt(filePath);
    const airport = (await import(`./${filePath}`)).default.default as Airport;
    const airportWithTimestamp = { ...airport, updatedAt };
    const airportWithCountryCode = { ...airport, countryCode };

    for (const field of filterFields) {
      const value = airport[field];
      const stringifiedValue = typeof value === 'boolean' ? (value ? 'true' : 'false') : value;
      // @ts-expect-error ¯\_(ツ)_/¯
      filterBy[field][stringifiedValue].push(airportWithCountryCode);
    }

    const { local, ...identifiers } = airport.identifiers;
    const localDir = await mkdir(distDir, 'local', countryCode);
    await writeFile(localDir, local, airportWithTimestamp);
    for await (const [identifier, value] of Object.entries(identifiers)) {
      const identifierDir = await mkdir(distDir, identifier);
      await writeFile(identifierDir, value, airportWithTimestamp);
    }
  }

  for await (const field of filterFields) {
    const filterByFieldDir = await mkdir(distDir, 'filterBy', field);
    const filteredByField = filterBy[field];
    for await (const [airportType, airports] of Object.entries(filteredByField)) {
      await writeFile(
        filterByFieldDir,
        airportType,
        airports.map(({ coordinates, countryCode, identifiers, name, type }) => ({
          type,
          coordinates,
          identifiers,
          name,
          uri: `./local/${countryCode}/${identifiers.local}.json`,
        })),
      );
    }
  }

  const waypointFiles = await glob('./data/*/waypoints.json');
  for await (const filePath of waypointFiles) {
    const countryCode = getCountryCode(filePath);
    const localDir = await mkdir(distDir, 'local', countryCode);
    await copyFile(filePath, join(localDir, 'waypoints.json'));
  }
}

main().catch(
  (err) => {
    throw err;
  },
);
