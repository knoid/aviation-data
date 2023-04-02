import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.35546, -64.47527],
  elevation: 193,
  frequencies: [],
  identifiers: { local: "IGL" },
  name: "Ingeniero Luiggi",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
