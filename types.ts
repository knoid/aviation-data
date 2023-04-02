interface Frequency {
  type: string;
  frequency: number;
}

interface Runway {
  orientations: [string, string];
  type: 'asphalt' | 'concrete' | 'dirt';
}

export interface Airport {
  condition: 'private' | 'public';
  controlled: boolean;
  coordinates: [lat: number, lon: number];
  /** In feet. */
  elevation?: number;
  frequencies: Frequency[];
  identifiers: {
    iata?: string;
    icao?: string;
    local: string;
  };
  name: string;
  radio_helpers: Frequency[];
  reference?: { direction: string, distance: number };
  runways: Runway[];
  type: 'airport' | 'helipad';
}
