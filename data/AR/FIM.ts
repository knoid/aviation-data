import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.4680555555556, -61.5011111111111],
  elevation: 105,
  frequencies: [],
  identifiers: { local: "FIM" },
  name: "Firmat",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0.92 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
