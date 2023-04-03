import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.5827777777778, -59.0005555555556],
  elevation: 28,
  frequencies: [],
  identifiers: { local: "GRZ" },
  name: "General Rodríguez",
  radio_helpers: [],
  reference: { direction: "SE", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
