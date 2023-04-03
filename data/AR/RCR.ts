import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.1727777777778, -64.0883333333333],
  elevation: 380,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "RCR" },
  name: "Río Tercero",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
