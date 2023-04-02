import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.04762, -59.53521],
  elevation: 39,
  frequencies: [],
  identifiers: { local: "ESN" },
  name: "Esquina",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
