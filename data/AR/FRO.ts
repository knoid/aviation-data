import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.82616, -64.96323],
  elevation: 837,
  frequencies: [],
  identifiers: { local: "FRO" },
  name: "Rosario de la Frontera",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
