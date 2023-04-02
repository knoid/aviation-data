import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.5319444444444, -63.9605555555556],
  elevation: 154,
  frequencies: [],
  identifiers: { local: "JOC" },
  name: "Jovita / Antares",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
