import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.16435, -59.73148],
  elevation: 49,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CTS" },
  name: "Capitán Sarmiento",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
