import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.8021694444444, -58.0142805555556],
  elevation: 69,
  frequencies: [],
  identifiers: { local: "CSU" },
  name: "Chajarí / Sur",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
