import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.4083333333333, -60.3011111111111],
  elevation: 104,
  frequencies: [],
  identifiers: { local: "SGI" },
  name: "Tres Arroyos / Santagiulian",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
