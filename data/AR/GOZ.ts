import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.09556, -58.0858],
  elevation: 19,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "GOZ" },
  name: "Gómez",
  radio_helpers: [],
  reference: { direction: "SE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
