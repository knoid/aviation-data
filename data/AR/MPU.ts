import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.8888888888889, -57.8516666666667],
  elevation: 16,
  frequencies: [],
  identifiers: { local: "MPU" },
  name: "Maipú",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["14", "32"] },
    { type: "dirt", orientations: ["05", "23"] },
  ],
});
