import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.23519, -57.84572],
  elevation: 65,
  frequencies: [],
  identifiers: { local: "MCT" },
  name: "Monte Caseros / Timboy",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 11 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
