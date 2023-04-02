import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.6583333333333, -62.7019444444444],
  elevation: 131,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "BEL" },
  name: "Bell Ville",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.3 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
