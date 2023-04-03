import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-33.09216, -64.26934],
  elevation: 421,
  frequencies: [
    { type: "APP", frequency: 118.75 },
    { type: "TWR", frequency: 118.75 },
  ],
  identifiers: { icao: "SAOC", local: "TRC", iata: "RCU" },
  name: "Río Cuarto / Área de Material",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.8 },
    { type: "ILS/LOC", frequency: 110.9 },
    { type: "VOR/DME", frequency: 114.2 },
  ],
  reference: { direction: "NE", distance: 4.3 },
  runways: [
    { type: "asphalt", orientations: ["05", "23"] },
    { type: "asphalt", orientations: ["18", "36"] },
  ],
});
