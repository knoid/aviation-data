import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.46055556, -64.28333333],
  frequencies: [],
  identifiers: { local: "ESC" },
  name: "Córdoba / Escuela de Aviación Militar",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.5 },
    { type: "ILS/LOC", frequency: 108.7 },
    { type: "VOR", frequency: 117.8 },
  ],
  runways: [
    { type: "asphalt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["07", "25"] },
  ],
});
