import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.74368, -59.56887],
  elevation: 61,
  frequencies: [],
  identifiers: { local: "LAZ" },
  name: "La paz / Aeroclub",
  radio_helpers: [],
  reference: { direction: "E", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
