import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.69589, -58.8989],
  elevation: 66,
  frequencies: [],
  identifiers: { local: "URD" },
  name: "Urdinarrain",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
