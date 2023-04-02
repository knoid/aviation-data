import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-24.8066666666667, -64.1811111111111],
  elevation: 457,
  frequencies: [],
  identifiers: { local: "PCA" },
  name: "Piquete Cabado / Sas Aeroaplicaciones",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
