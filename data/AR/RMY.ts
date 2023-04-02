import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-45.7038888888889, -70.2444444444444],
  elevation: 544,
  frequencies: [],
  identifiers: { icao: "SAWM", local: "RMY", iata: "ROY" },
  name: "Río Mayo",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
