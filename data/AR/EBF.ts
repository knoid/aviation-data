import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.4055555555556, -60.8994444444444],
  elevation: 39,
  frequencies: [],
  identifiers: { local: "EBF" },
  name: "Esperanza / Anibal Brizi",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
