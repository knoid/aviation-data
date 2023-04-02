import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.05267, -61.95324],
  elevation: 158,
  frequencies: [],
  identifiers: { local: "HUG" },
  name: "Huanguelén",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
