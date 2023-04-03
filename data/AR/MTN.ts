import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.5141666666667, -64.9655555555556],
  elevation: 843,
  frequencies: [],
  identifiers: { local: "MTN" },
  name: "Metán",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
