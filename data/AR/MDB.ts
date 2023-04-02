import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.0116666666667, -57.6775],
  elevation: 62,
  frequencies: [{ type: "COM", frequency: 118.4 }],
  identifiers: { local: "MDB" },
  name: "Mar del Plata / Batán",
  radio_helpers: [],
  reference: { direction: "W", distance: 6.2 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
