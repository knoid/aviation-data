import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.3513888888889, -68.4730555555556],
  elevation: 650,
  frequencies: [],
  identifiers: { local: "AJA" },
  name: "La Laja",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
