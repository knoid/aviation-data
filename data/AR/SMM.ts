import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.4594444444444, -58.7638888888889],
  elevation: 24,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "SMM" },
  name: "San Miguel del Monte / Bahía Agradable",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
