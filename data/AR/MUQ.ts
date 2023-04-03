import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.0575, -63.6313888888889],
  frequencies: [],
  identifiers: { local: "MUQ" },
  name: "Quemú Quemú",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
