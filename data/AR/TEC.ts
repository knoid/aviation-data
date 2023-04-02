import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-43.6122222222222, -71.0219444444444],
  elevation: 720,
  frequencies: [],
  identifiers: { local: "TEC" },
  name: "Estancia Tecka",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.5 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
