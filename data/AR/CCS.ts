import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.10518, -66.1572],
  elevation: 2510,
  frequencies: [],
  identifiers: { local: "CCS" },
  name: "Cachi",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
