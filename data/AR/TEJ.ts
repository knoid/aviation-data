import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.4252777777778, -62.4694444444444],
  elevation: 94,
  frequencies: [],
  identifiers: { local: "TEJ" },
  name: "Carlos Tejedor",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
