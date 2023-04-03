import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.75659, -62.94407],
  elevation: 127,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SLO" },
  name: "Salliqueló",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.76 },
  runways: [{ type: "dirt", orientations: ["12", "30"] }],
});
