import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.6736111111111, -63.7180555555556],
  elevation: 139,
  frequencies: [],
  identifiers: { local: "GPF" },
  name: "General Pico / Cereales Anahí Ruca",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
