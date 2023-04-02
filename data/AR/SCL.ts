import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.35548, -61.82983],
  elevation: 105,
  frequencies: [],
  identifiers: { local: "SCL" },
  name: "Santa Clara de Saguier",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
