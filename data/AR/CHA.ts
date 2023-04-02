import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-27.21639, -61.21011],
  elevation: 92,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CHA" },
  name: "Charata",
  radio_helpers: [],
  reference: { direction: "S", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
