import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.22834, -68.47406],
  elevation: 659,
  frequencies: [{ type: "COM", frequency: 123.4 }],
  identifiers: { local: "RVD" },
  name: "Rivadavia",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
