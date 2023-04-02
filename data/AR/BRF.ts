import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.7305, -63.28722],
  elevation: 67,
  frequencies: [],
  identifiers: { local: "BRF" },
  name: "Bahía Blanca / La Reforma",
  radio_helpers: [],
  reference: { direction: "W", distance: 48 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
