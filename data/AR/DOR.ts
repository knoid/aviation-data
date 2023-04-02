import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.7411111111111, -61.2558333333333],
  elevation: 120,
  frequencies: [],
  identifiers: { local: "DOR" },
  name: "Coronel Dorrego",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["10", "28"] },
  ],
});
