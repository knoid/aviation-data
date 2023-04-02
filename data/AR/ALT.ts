import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.0077777777778, -61.8369444444444],
  elevation: 97,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "ALT" },
  name: "Cruz Alta",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
