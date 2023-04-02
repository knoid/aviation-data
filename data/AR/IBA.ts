import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.2777777777778, -60.5044444444444],
  elevation: 63,
  frequencies: [],
  identifiers: { local: "IBA" },
  name: "Inés Indart / Belingueres Aviación",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 7.6 },
  runways: [{ type: "dirt", orientations: ["13", "31"] }],
});
