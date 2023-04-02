import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.35684, -60.15597],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "SSK" },
  name: "Salto / Skare",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
