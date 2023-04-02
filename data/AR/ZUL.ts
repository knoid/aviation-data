import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.83675, -59.8808],
  elevation: 146,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { icao: "SAZA", local: "ZUL" },
  name: "Azul",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
