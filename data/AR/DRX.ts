import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.5827777777778, -61.7841666666667],
  elevation: 116,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "DRX" },
  name: "Daireaux",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.9 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
