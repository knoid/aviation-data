import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.93173, -62.43474],
  elevation: 108,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MBF" },
  name: "Monte Buey / Pedro Ferrari",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
