import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-45.5830555555556, -69.0011111111111],
  elevation: 270,
  frequencies: [],
  identifiers: { local: "SRM" },
  name: "Sarmiento",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
