import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.83057, -62.46787],
  elevation: 110,
  frequencies: [],
  identifiers: { local: "AME" },
  name: "Ameghino / Sigfrido Rohr Aviagro S.R.L.",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
