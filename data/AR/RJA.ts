import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.21534, -60.67325],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "RJA" },
  name: "Rojas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
