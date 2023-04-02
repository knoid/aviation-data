import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.4897222222222, -62.6713888888889],
  elevation: 129,
  frequencies: [],
  identifiers: { local: "ZLM" },
  name: "Bell Ville / La Zulema",
  radio_helpers: [],
  reference: { direction: "N", distance: 7 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
