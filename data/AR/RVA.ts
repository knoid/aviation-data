import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.5019444444444, -62.99],
  elevation: 106,
  frequencies: [],
  identifiers: { local: "RVA" },
  name: "América",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
