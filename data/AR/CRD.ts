import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.3038888888889, -58.015],
  elevation: 90,
  frequencies: [],
  identifiers: { local: "CRD" },
  name: "Concordia / Aeroclub",
  radio_helpers: [],
  reference: { direction: "N", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
