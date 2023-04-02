import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.67594, -62.0259],
  elevation: 94,
  frequencies: [],
  identifiers: { local: "MTR" },
  name: "Morteros",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
