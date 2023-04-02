import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.0066666666667, -61.3319444444444],
  elevation: 247,
  frequencies: [],
  identifiers: { local: "PRI" },
  name: "Coronel Pringles",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
