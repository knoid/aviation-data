import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-24.31467, -65.24727],
  elevation: 1190,
  frequencies: [],
  identifiers: { local: "PDA" },
  name: "Jujuy / Puerta de Avalos",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 7.6 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
