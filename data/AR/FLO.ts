import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.0663888888889, -59.1005555555556],
  elevation: 34,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "FLO" },
  name: "Las Flores",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.7 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["02", "20"] },
  ],
});
