import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-46.5761111111111, -70.9480555555556],
  elevation: 387,
  frequencies: [],
  identifiers: { local: "BAI" },
  name: "Lago Buenos Aires",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
