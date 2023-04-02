import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.9152777777778, -58.3436111111111],
  elevation: 120,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "BAL" },
  name: "Balcarce",
  radio_helpers: [],
  reference: { direction: "S", distance: 6.5 },
  runways: [
    { type: "dirt", orientations: ["03", "21"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
