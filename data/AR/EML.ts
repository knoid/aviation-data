import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.19441, -58.35994],
  elevation: 15,
  frequencies: [],
  identifiers: { local: "EML" },
  name: "Coronel Brandsen / El Manantial",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 6.7 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
