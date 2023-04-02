import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.8827777777778, -61.8433333333333],
  elevation: 106,
  frequencies: [],
  identifiers: { local: "JOR" },
  name: "San Jorge",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
