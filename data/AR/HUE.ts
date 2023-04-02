import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.1938888888889, -62.7813888888889],
  elevation: 110,
  frequencies: [],
  identifiers: { local: "HUE" },
  name: "Carhué",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["13", "31"] },
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
