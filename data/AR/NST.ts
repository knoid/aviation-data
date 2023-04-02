import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.4375, -63.8580555555556],
  elevation: 317,
  frequencies: [],
  identifiers: { local: "NST" },
  name: "Nuestra Señora de Talavera / Finca Toloche",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
