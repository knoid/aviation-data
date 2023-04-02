import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-48.7833333333333, -70.1622222222222],
  elevation: 356,
  frequencies: [],
  identifiers: { icao: "SAWR", local: "GRE", iata: "GGS" },
  name: "Gobernador Gregores",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
