import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.0158333333333, -62.6938888888889],
  elevation: 99,
  frequencies: [],
  identifiers: { local: "LAU" },
  name: "Trenque Lauquen",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
