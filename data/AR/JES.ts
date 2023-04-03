import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.9883, -64.07797],
  elevation: 530,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "JES" },
  name: "Jesús María",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 0.97 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
