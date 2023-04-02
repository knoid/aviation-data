import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.38823, -63.30551],
  elevation: 143,
  frequencies: [],
  identifiers: { local: "LCC" },
  name: "La Carlota / Casajus",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
