import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.066, -63.42902],
  elevation: 160,
  frequencies: [],
  identifiers: { local: "JAR" },
  name: "Jacinto Aráuz",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.54 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
