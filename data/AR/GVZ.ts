import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.0330555555556, -60.1338888888889],
  elevation: 194,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GVZ" },
  name: "Gonzalez Chaves",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.3 },
  runways: [
    { type: "dirt", orientations: ["13", "31"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
