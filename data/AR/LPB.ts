import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-49.99499, -68.94984],
  elevation: 24,
  frequencies: [],
  identifiers: { local: "LPB" },
  name: "Comandante Luis Piedrabuena",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
