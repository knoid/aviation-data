import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.6298, -61.39401],
  elevation: 80,
  frequencies: [],
  identifiers: { local: "CSR" },
  name: "Carlos Casares",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
