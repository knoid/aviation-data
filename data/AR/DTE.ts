import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.01621, -60.58329],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "DTE" },
  name: "Diamante",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
