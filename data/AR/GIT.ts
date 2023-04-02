import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.15852, -59.17949],
  elevation: 64,
  frequencies: [],
  identifiers: { local: "GIT" },
  name: "Goya / Italaviation",
  radio_helpers: [],
  reference: { direction: "E", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
