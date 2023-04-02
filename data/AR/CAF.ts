import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.0641666666667, -65.9305555555556],
  elevation: 1639,
  frequencies: [],
  identifiers: { local: "CAF" },
  name: "Cafayate",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.54 },
  runways: [{ type: "asphalt", orientations: ["15", "33"] }],
});
