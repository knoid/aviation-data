import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.2219444444444, -61.3866666666667],
  elevation: 82,
  frequencies: [],
  identifiers: { local: "ARB" },
  name: "Arribeños",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.8 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
