import { throws } from 'node:assert';
import { describe, test } from 'node:test';
import { defineAirport } from './utils';

describe('defineAirport', () => {
  test('fails when creating unsorted runways', () => {
    throws(
      () =>
        defineAirport({
          runways: [{ orientations: [5, 2], type: 'dirt' }],
          controlled: false,
          frequencies: [],
          geometry: { type: 'Point', coordinates: [1, 2] },
          identifiers: {
            iata: undefined,
            icao: undefined,
            local: '',
          },
          name: '',
          radio_helpers: [],
        })
    );
  });
});
