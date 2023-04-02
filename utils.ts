import assert from 'node:assert';
import { Airport } from './types';

function isSorted(arr: string[]) {
  return arr.every((value, index) => index + 1 === arr.length || value <= arr[index + 1]);
}

export function defineAirport(value: Airport) {
  assert(
    value.runways.every((runway) => isSorted(runway.orientations)),
    'Runway orientations should be sorted.'
  );
  return value;
}
