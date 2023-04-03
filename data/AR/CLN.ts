import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.2608333333333, -58.1561111111111],
  elevation: 20,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CLN" },
  name: "Colón (Entre Ríos)",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
