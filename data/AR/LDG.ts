import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.65469, -61.0091],
  elevation: 80,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "LDG" },
  name: "Laguna de Gómez",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 5.9 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
