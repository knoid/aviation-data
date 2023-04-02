import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.66857, -59.83415],
  elevation: 28,
  frequencies: [],
  identifiers: { local: "GOC" },
  name: "Gobernador Castro / El Girasol",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
