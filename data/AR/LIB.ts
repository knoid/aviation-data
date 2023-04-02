import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-29.6880555555556, -57.1522222222222],
  elevation: 70,
  frequencies: [],
  identifiers: { icao: "SARL", local: "LIB", iata: "AOL" },
  name: "Paso de los Libres",
  radio_helpers: [
    { type: "NDB", frequency: 140.6 },
    { type: "NDB/LI", frequency: 9.7 },
  ],
  reference: { direction: "NW", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
