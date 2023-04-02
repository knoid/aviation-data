import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.9644444444444, -64.5644444444444],
  elevation: 840,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VGB" },
  name: "Villa General Belgrano",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
