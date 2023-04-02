import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.08177, -70.64406],
  elevation: 1106,
  frequencies: [],
  identifiers: { local: "LCP" },
  name: "Loncopué",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
