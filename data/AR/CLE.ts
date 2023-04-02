import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.0880555555556, -64.1697222222222],
  elevation: 439,
  frequencies: [],
  identifiers: { local: "CLE" },
  name: "Corralito / Lomas del Espinillo",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
