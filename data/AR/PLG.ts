import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.27873, -63.14695],
  elevation: 113,
  frequencies: [],
  identifiers: { local: "PLG" },
  name: "Pellegrini",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
