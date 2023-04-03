import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.934, -64.41595],
  elevation: 243,
  frequencies: [],
  identifiers: { local: "VMC" },
  name: "Vicuña Mackenna / Comequechen",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
