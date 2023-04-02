import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.9697222222222, -67.7241666666667],
  elevation: 466,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GVA" },
  name: "General Alvear / Aeroclub",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
