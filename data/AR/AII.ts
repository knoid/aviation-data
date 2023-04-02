import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.81116, -60.51661],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "AII" },
  name: "Chacabuco / Las 2 A",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 11 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
