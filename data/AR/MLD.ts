import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.61743, -64.61701],
  elevation: 357,
  frequencies: [],
  identifiers: { local: "MLD" },
  name: "Coronel Moldes",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
