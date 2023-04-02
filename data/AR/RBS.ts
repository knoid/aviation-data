import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.24928, -62.67405],
  elevation: 120,
  frequencies: [],
  identifiers: { local: "RBS" },
  name: "Rufino / Bsg",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
