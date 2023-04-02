import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.6294444444444, -61.5444444444444],
  elevation: 105,
  frequencies: [],
  identifiers: { local: "EGO" },
  name: "Las Parejas / El Gaucho",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
