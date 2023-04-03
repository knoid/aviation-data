import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.3994444444444, -59.7505555555556],
  elevation: 43,
  frequencies: [],
  identifiers: { local: "NOG" },
  name: "Nogoyá",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
