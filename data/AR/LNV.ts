import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.94464, -61.30217],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "LNV" },
  name: "Lincoln / La Nueva",
  radio_helpers: [],
  reference: { direction: "SE", distance: 12 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
