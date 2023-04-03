import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.21113, -64.16064],
  elevation: 495,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "JCM" },
  name: "Juárez Celman / Brig. My. Juan Ignacio San Martín",
  radio_helpers: [],
  reference: { direction: "N", distance: 11 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
