import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.9225, -61.0463888888889],
  elevation: 90,
  frequencies: [],
  identifiers: { local: "CON" },
  name: "Colón / Buenos Aires",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
