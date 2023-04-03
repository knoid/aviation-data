import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-43.08742, -71.47808],
  elevation: 397,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TVN" },
  name: "Trevelín",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
