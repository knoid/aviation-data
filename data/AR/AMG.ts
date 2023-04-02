import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.84541, -62.48266],
  elevation: 110,
  frequencies: [],
  identifiers: { local: "AMG" },
  name: "Ameghino",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
