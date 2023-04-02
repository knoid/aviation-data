import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.16975, -59.24699],
  elevation: 38,
  frequencies: [],
  identifiers: { local: "GYA" },
  name: "Goya / Aeroclub",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
