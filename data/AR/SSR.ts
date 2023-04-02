import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.8283333333333, -60.1466666666667],
  elevation: 54,
  frequencies: [],
  identifiers: { local: "SSR" },
  name: "Saladillo / Santa Rita",
  radio_helpers: [],
  reference: { direction: "SW", distance: 21 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
