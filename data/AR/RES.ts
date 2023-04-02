import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-27.6311111111111, -59.1797222222222],
  elevation: 50,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "RES" },
  name: "Resistencia / Aeroclub Chaco",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 16 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
