import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-27.38573, -55.97049],
  elevation: 131,
  frequencies: [
    { type: "APP", frequency: 120.1 },
    { type: "TWR", frequency: 120.1 },
  ],
  identifiers: { icao: "SARP", local: "POS", iata: "PSS" },
  name: "Posadas / Libertador Gral. D. J. De San Martín",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.8 },
    { type: "ILS/LOC", frequency: 109.9 },
    { type: "NDB/LI", frequency: 307 },
    { type: "VOR/DME", frequency: 114.9 },
  ],
  reference: { direction: "NW", distance: 4 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
