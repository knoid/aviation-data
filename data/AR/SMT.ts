import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.95934, -63.59111],
  elevation: 161,
  frequencies: [],
  identifiers: { local: "SMT" },
  name: "General san Martín",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
