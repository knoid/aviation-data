import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.0877777777778, -58.6694444444444],
  elevation: 54,
  frequencies: [],
  identifiers: { local: "LPP" },
  name: "Las Palmas / Petruk",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
