import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.3872222222222, -60.3691666666667],
  elevation: 52,
  frequencies: [],
  identifiers: { local: "GCR" },
  name: "Gobernador Crespo / Aeroclub",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
