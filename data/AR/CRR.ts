import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-27.4455555555556, -58.7619444444444],
  elevation: 61,
  frequencies: [{ type: "TWR", frequency: 118.3 }],
  identifiers: { icao: "SARC", local: "CRR", iata: "CNQ" },
  name: "Corrientes",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.2 },
    { type: "ILS/LOC", frequency: 109.7 },
    { type: "MM", frequency: 539.9 },
    { type: "NDB/LI", frequency: 541.6 },
    { type: "VOR/DME", frequency: 115.4 },
  ],
  reference: { direction: "E", distance: 4 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
