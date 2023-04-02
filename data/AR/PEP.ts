import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.8038888888889, -60.7988888888889],
  elevation: 55,
  frequencies: [],
  identifiers: { local: "PEP" },
  name: "Ricardone / Pettilep ii",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
