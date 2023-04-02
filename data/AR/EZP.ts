import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.7463888888889, -58.2033333333333],
  elevation: 3,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "EZP" },
  name: "Ezpeleta",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
