import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.06242, -61.20973],
  elevation: 77,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ILD" },
  name: "Casilda",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
