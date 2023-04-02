import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.81797, -62.47709],
  elevation: 109,
  frequencies: [],
  identifiers: { local: "AUL" },
  name: "Ameghino / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
