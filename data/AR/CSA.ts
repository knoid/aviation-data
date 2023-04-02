import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.65737, -63.27608],
  elevation: 202,
  frequencies: [],
  identifiers: { local: "CSA" },
  name: "Calchín / Aerocampo Servicios Aéreos",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
