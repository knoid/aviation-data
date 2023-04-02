import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.6511111111111, -64.3938888888889],
  elevation: 533,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "AGR" },
  name: "Alta Gracia",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
