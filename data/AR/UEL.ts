import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.80384, -59.03479],
  elevation: 61,
  frequencies: [],
  identifiers: { local: "UEL" },
  name: "Villaguay / El Jagüel",
  radio_helpers: [],
  reference: { direction: "N", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
