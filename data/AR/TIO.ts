import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.2930555555556, -63.4019444444444],
  elevation: 237,
  frequencies: [],
  identifiers: { local: "TIO" },
  name: "Tío Pujio",
  radio_helpers: [],
  reference: { direction: "0", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
