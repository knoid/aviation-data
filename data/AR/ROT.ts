import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.32954, -59.19146],
  elevation: 54,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ROT" },
  name: "Rosario del Tala",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
