import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-42.4806, -71.45682],
  elevation: 574,
  frequencies: [],
  identifiers: { local: "CHO" },
  name: "Cholila",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
