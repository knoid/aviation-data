import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.8505555555556, -59.0730555555556],
  elevation: 40,
  frequencies: [],
  identifiers: { icao: "SAAU", local: "VIG" },
  name: "Villaguay",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
