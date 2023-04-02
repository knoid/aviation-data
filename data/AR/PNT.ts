import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.78595, -61.91415],
  elevation: 97,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "PNT" },
  name: "General Pinto",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
