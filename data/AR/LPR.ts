import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.5208333333333, -60.7783333333333],
  elevation: 210,
  frequencies: [],
  identifiers: { local: "LPR" },
  name: "Laprida",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["05", "23"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
