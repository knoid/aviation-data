import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-24.7458333333333, -65.4188888888889],
  elevation: 1261,
  frequencies: [],
  identifiers: { local: "GBL" },
  name: "Salta / General Belgrano",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["14", "32"] },
    { type: "dirt", orientations: ["04", "22"] },
  ],
});
