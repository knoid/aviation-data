import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.53828, -70.3367],
  elevation: 850,
  frequencies: [],
  identifiers: { local: "LLJ" },
  name: "Las Lajas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["10", "28"] }],
});
