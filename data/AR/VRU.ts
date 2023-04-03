import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.1841666666667, -64.4888888888889],
  elevation: 666,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VRU" },
  name: "Villa Rumipal / Primer Teniente Mario Nívoli",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 0 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
