import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.24173, -61.82767],
  elevation: 273,
  frequencies: [],
  identifiers: { local: "SLY" },
  name: "Saldungaray / Santo Tomás de la Sierra",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
