import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.59076, -61.77504],
  elevation: 113,
  frequencies: [],
  identifiers: { local: "DFR" },
  name: "Daireaux / Fumigaciones",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
