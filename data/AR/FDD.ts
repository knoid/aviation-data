import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-23.2425, -63.3230555555556],
  elevation: 244,
  frequencies: [],
  identifiers: { local: "FDD" },
  name: "Fortín Dragones / El Desafío",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
