import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.86972, -57.87667],
  elevation: 8,
  frequencies: [],
  identifiers: { local: "LDA" },
  name: "Lezama / Don Alberto",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
