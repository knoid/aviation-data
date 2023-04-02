import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-43.7213888888889, -71.2455555555556],
  elevation: 740,
  frequencies: [],
  identifiers: { local: "VEC" },
  name: "Corcovado / Estancia Caridad",
  radio_helpers: [],
  reference: { direction: "SE", distance: 15 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
