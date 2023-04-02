import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.0963888888889, -56.9741666666667],
  elevation: 9,
  frequencies: [{ type: "COM", frequency: 121 }],
  identifiers: { local: "PNR" },
  name: "Pinamar",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
