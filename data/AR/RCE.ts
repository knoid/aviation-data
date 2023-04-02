import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.2222222222222, -58.0880555555556],
  elevation: 106,
  frequencies: [],
  identifiers: { local: "RCE" },
  name: "Mercedes",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.2 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
