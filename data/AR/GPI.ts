import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.6947222222222, -63.7588888888889],
  elevation: 140,
  frequencies: [{ type: "AFIS", frequency: 119 }],
  identifiers: { icao: "SAZG", local: "GPI", iata: "GPO" },
  name: "General Pico",
  radio_helpers: [
    { type: "NDB/LI", frequency: 254.6 },
    { type: "VOR", frequency: 112.2 },
  ],
  reference: { direction: "SW", distance: 1.9 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
