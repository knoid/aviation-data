import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.1116666666667, -58.7263888888889],
  elevation: 30,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "CNA" },
  name: "Cañuelas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
