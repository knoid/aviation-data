import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.4986111111111, -61.8841666666667],
  elevation: 159,
  frequencies: [],
  identifiers: { local: "CBD" },
  name: "Cabildo",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
