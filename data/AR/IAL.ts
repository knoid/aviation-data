import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.23368, -63.56571],
  elevation: 127,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "IAL" },
  name: "Intendente Alvear",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
