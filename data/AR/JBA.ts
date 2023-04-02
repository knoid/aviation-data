import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.48351, -61.90455],
  elevation: 102,
  frequencies: [],
  identifiers: { local: "JBA" },
  name: "Juan Bautista Alberdi",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
