import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.4930555555556, -61.5816666666667],
  elevation: 102,
  frequencies: [],
  identifiers: { local: "LRS" },
  name: "Las Rosas",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
