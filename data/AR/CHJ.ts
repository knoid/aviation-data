import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.7539, -58.00002],
  elevation: 53,
  frequencies: [],
  identifiers: { local: "CHJ" },
  name: "Chajarí",
  radio_helpers: [],
  reference: { direction: "W", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
