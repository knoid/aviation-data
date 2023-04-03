import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.04338, -58.59132],
  elevation: 88,
  frequencies: [],
  identifiers: { local: "ESR" },
  name: "El Espinillo / Estancia San Rafael",
  radio_helpers: [],
  reference: { direction: "SE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
