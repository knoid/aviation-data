import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.7308333333333, -60.22],
  elevation: 46,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "PNA" },
  name: "Paraná / Club de Planeadores",
  radio_helpers: [],
  reference: { direction: "E", distance: 16 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
