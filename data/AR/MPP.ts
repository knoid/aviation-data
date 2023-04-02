import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.0152777777778, -57.6536111111111],
  elevation: 45,
  frequencies: [{ type: "COM", frequency: 120 }],
  identifiers: { local: "MPP" },
  name: "Mar del Plata / Club de Planeadores",
  radio_helpers: [],
  reference: { direction: "W", distance: 5.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
