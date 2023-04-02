import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.77697, -62.01466],
  elevation: 101,
  frequencies: [],
  identifiers: { local: "CSJ" },
  name: "Morteros / Campo san José",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
