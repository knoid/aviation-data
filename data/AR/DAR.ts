import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.7122, -63.16253],
  elevation: 198,
  frequencies: [],
  identifiers: { local: "DAR" },
  name: "Darregueira",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
