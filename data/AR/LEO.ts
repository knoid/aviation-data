import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.64264, -62.31681],
  elevation: 114,
  frequencies: [],
  identifiers: { local: "LEO" },
  name: "Leones",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
