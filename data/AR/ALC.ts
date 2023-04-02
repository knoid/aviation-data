import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.80942, -62.52293],
  elevation: 109,
  frequencies: [],
  identifiers: { local: "ALC" },
  name: "Ameghino / La Chacra",
  radio_helpers: [],
  reference: { direction: "NW", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
