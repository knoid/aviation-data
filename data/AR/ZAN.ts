import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.66083333, -69.72638889],
  frequencies: [],
  identifiers: { local: "ZAN" },
  name: "Zancarrón",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
