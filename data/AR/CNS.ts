import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.56247, -62.86911],
  elevation: 116,
  frequencies: [],
  identifiers: { local: "CNS" },
  name: "Canals",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.27 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
