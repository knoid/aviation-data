import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-39.0747222222222, -67.0780555555556],
  elevation: 285,
  frequencies: [],
  identifiers: { local: "VRG" },
  name: "Villa Regina",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.76 },
  runways: [
    { type: "dirt", orientations: ["08", "26"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
