import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.7905555555556, -61.9419444444444],
  elevation: 86,
  frequencies: [],
  identifiers: { local: "PJO" },
  name: "Pehuajó / La Mariela",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
