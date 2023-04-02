import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.095, -62.2494444444444],
  elevation: 285,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TOR" },
  name: "Tornquist",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
