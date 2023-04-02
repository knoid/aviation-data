import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.5441666666667, -54.7238888888889],
  elevation: 240,
  frequencies: [],
  identifiers: { local: "MTL" },
  name: "Montecarlo",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
