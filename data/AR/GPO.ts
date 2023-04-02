import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-27.34401, -61.27484],
  elevation: 91,
  frequencies: [],
  identifiers: { local: "GPO" },
  name: "General Pinedo",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
