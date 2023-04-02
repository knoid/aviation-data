import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.00928, -61.06286],
  elevation: 73,
  frequencies: [],
  identifiers: { local: "PLL" },
  name: "Pujato / La Lucía",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
