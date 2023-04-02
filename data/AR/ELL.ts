import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.3086111111111, -58.105],
  elevation: 22,
  frequencies: [],
  identifiers: { local: "ELL" },
  name: "Mar del sur / Estancia Lucila",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
