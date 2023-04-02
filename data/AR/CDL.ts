import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.75769, -63.74818],
  elevation: 249,
  frequencies: [],
  identifiers: { local: "CDL" },
  name: "Cañada de Luque / Biondi",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
