import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.8515722222222, -60.2920166666667],
  elevation: 56,
  frequencies: [],
  identifiers: { local: "CCI" },
  name: "Calchaquí",
  radio_helpers: [],
  reference: { direction: "N", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
