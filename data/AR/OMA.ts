import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.41383, -68.73715],
  elevation: 405,
  frequencies: [],
  identifiers: { local: "OMA" },
  name: "Loma la Lata",
  radio_helpers: [],
  reference: { direction: "NW", distance: 43 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
