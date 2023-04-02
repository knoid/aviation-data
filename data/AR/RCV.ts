import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.0655555555556, -69.3955555555556],
  elevation: 930,
  frequencies: [],
  identifiers: { local: "RCV" },
  name: "Río Colorado / Vale",
  radio_helpers: [],
  reference: { direction: "NW", distance: 30 },
  runways: [{ type: "asphalt", orientations: ["10", "28"] }],
});
