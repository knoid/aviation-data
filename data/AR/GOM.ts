import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.80887, -61.36579],
  elevation: 82,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GOM" },
  name: "Cañada de Gómez",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
