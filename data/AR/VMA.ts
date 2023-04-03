import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.93823, -64.40775],
  elevation: 228,
  frequencies: [],
  identifiers: { local: "VMA" },
  name: "Vicuña Mackenna / Don Ángel",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
