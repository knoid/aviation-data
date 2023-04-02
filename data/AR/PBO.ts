import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.60678, -55.86498],
  elevation: 141,
  frequencies: [],
  identifiers: { local: "PBO" },
  name: "Posadas / Bonetti",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
