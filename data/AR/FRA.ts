import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.4130555555556, -62.1330555555556],
  elevation: 114,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "FRA" },
  name: "San Francisco",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
