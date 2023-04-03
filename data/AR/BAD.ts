import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.3827777777778, -57.6441666666667],
  elevation: 67,
  frequencies: [],
  identifiers: { local: "BAD" },
  name: "Berón de Astrada / Dinaluca S.A.",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 11 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
