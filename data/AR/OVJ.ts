import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.9991666666667, -70.7422222222222],
  elevation: 1200,
  frequencies: [],
  identifiers: { local: "OVJ" },
  name: "Las Ovejas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.81 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
