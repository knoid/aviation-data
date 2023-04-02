import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.2702777777778, -57.6394444444444],
  elevation: 52,
  frequencies: [],
  identifiers: { icao: "SARM", local: "MCS", iata: "MCS" },
  name: "Monte Caseros",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
