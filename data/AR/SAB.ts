import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.73851, -59.76197],
  elevation: 39,
  frequencies: [],
  identifiers: { local: "SAB" },
  name: "Saladillo / Abelenda",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
