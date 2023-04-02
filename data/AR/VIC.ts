import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.5845, -60.1894],
  elevation: 12,
  frequencies: [],
  identifiers: { local: "VIC" },
  name: "Victoria",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.6 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
