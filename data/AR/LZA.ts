import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-42.21713, -71.80522],
  elevation: 560,
  frequencies: [],
  identifiers: { local: "LZA" },
  name: "Lago la Esperanza",
  radio_helpers: [],
  reference: { direction: "SW", distance: 13 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
