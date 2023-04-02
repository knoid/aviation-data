import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.2162, -61.71634],
  elevation: 92,
  frequencies: [],
  identifiers: { local: "ETB" },
  name: "El Trébol",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
