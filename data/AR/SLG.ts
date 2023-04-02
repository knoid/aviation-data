import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.20517, -61.76115],
  elevation: 228,
  frequencies: [],
  identifiers: { local: "SLG" },
  name: "Saldungaray",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
