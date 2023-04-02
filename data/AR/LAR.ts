import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-29.3805555555556, -66.7958333333333],
  elevation: 438,
  frequencies: [
    { type: "APP", frequency: 118.45 },
    { type: "TWR", frequency: 118.45 },
  ],
  identifiers: { icao: "SANL", local: "LAR", iata: "IRJ" },
  name: "La Rioja / Capitán Vicente Almandos Almonacid",
  radio_helpers: [
    { type: "GP/DME", frequency: 334.4 },
    { type: "ILS/LOC", frequency: 110.1 },
    { type: "NDB/LI", frequency: 307 },
    { type: "VOR", frequency: 113.5 },
  ],
  reference: { direction: "NE", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
