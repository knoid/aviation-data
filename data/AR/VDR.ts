import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.5805555555556, -63.5388888888889],
  elevation: 253,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VDR" },
  name: "Villa del Rosario",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
