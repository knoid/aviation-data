import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.57637, -61.00568],
  elevation: 84,
  frequencies: [],
  identifiers: { local: "SAF" },
  name: "Saforcada / Parajon",
  radio_helpers: [],
  reference: { direction: "E", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
