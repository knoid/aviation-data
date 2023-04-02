import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.9625, -60.0322222222222],
  elevation: 53,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CHY" },
  name: "Chivilcoy",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.8 },
  runways: [
    { type: "dirt", orientations: ["03", "21"] },
    { type: "dirt", orientations: ["08", "26"] },
  ],
});
