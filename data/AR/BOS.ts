import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.2108333333333, -59.1366666666667],
  elevation: 29,
  frequencies: [{ type: "COM", frequency: 123.3 }],
  identifiers: { local: "BOS" },
  name: "Lobos",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["17", "35"] },
    { type: "dirt", orientations: ["10", "28"] },
  ],
});
