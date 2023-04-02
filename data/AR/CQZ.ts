import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.5497222222222, -58.7175],
  elevation: 55,
  frequencies: [],
  identifiers: { local: "CQZ" },
  name: "Cañada Quiróz",
  radio_helpers: [],
  reference: { direction: "SE", distance: 8.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
