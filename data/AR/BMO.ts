import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.1516666666667, -60.5055555555556],
  elevation: 57,
  frequencies: [],
  identifiers: { local: "BMO" },
  name: "Bragado / Malfato",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
