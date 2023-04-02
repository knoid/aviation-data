import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.04099, -56.07106],
  elevation: 123,
  frequencies: [],
  identifiers: { local: "EVC" },
  name: "Gobernador Valentín Virasoro / Ea. Villa Corina",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
