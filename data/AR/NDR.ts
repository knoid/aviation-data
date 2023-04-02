import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.327583, -59.7910805],
  elevation: 38,
  frequencies: [],
  identifiers: { local: "NDR" },
  name: "Norberto de la Riestra",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
