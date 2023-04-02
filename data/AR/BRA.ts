import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.1452777777778, -60.4819444444444],
  elevation: 60,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "BRA" },
  name: "Bragado",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["12", "30"] },
  ],
});
