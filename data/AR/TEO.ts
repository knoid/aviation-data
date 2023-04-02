import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.1766666666667, -61.5069444444444],
  elevation: 87,
  frequencies: [],
  identifiers: { local: "TEO" },
  name: "Teodelina / F.A.T.",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
