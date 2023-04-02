import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.61901, -61.60359],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "MIN" },
  name: "Villa Minetti",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.7 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
