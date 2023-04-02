import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.4180555555556, -59.8744444444444],
  elevation: 49,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CNO" },
  name: "Carmen de Areco",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
