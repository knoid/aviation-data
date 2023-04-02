import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.46835, -60.2264],
  elevation: 58,
  frequencies: [],
  identifiers: { local: "VER" },
  name: "Vera",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
