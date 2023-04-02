import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.2813888888889, -62.1513888888889],
  elevation: 120,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "BTS" },
  name: "Corral de Bustos",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
