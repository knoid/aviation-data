import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.8341666666667, -62.0872222222222],
  elevation: 3,
  frequencies: [],
  identifiers: { local: "PLT" },
  name: "Punta Alta",
  radio_helpers: [],
  reference: { direction: "N", distance: 3 },
  runways: [
    { type: "dirt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
