import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.455, -58.3066666666667],
  elevation: 34,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "CDU" },
  name: "Concepción del Uruguay",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
