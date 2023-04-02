import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.9951, -57.83833],
  elevation: 81,
  frequencies: [],
  identifiers: { local: "LLE" },
  name: "Libertad / La Esmeralda",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
