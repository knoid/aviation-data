import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.05939, -67.69319],
  elevation: 454,
  frequencies: [],
  identifiers: { icao: "SAMA", local: "GNA" },
  name: "General Alvear",
  radio_helpers: [],
  reference: { direction: "S", distance: 4 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
