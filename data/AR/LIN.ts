import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.8908333333333, -61.5313888888889],
  elevation: 85,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "LIN" },
  name: "Lincoln",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
