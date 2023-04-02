import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.3152777777778, -61.7477777777778],
  elevation: 150,
  frequencies: [],
  identifiers: { local: "HDS" },
  name: "Henderson",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 1.3 },
  runways: [
    { type: "dirt", orientations: ["05", "23"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
