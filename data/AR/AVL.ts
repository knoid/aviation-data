import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.1061111111111, -59.6575],
  elevation: 45,
  frequencies: [{ type: "TWR", frequency: 120.85 }],
  identifiers: { local: "AVL" },
  name: "Avellaneda / Pte. Avellaneda",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
