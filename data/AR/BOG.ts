import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.32404, -60.66617],
  elevation: 48,
  frequencies: [],
  identifiers: { local: "BOG" },
  name: "Coronel Bogado / Fumigaciones Campagnucci",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
