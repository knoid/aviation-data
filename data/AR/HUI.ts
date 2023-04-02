import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.82041, -64.37412],
  elevation: 180,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "HUI" },
  name: "Huinca Renancó",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
