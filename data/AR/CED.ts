import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.6422, -65.42051],
  elevation: 515,
  frequencies: [{ type: "COM", frequency: 124 }],
  identifiers: { local: "CED" },
  name: "Mercedes",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["02", "20"] },
  ],
});
