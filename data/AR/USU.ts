import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-54.8433333333333, -68.2955555555556],
  elevation: 31,
  frequencies: [
    { type: "APP", frequency: 118.1 },
    { type: "ATIS", frequency: 127.8 },
    { type: "TMA", frequency: 123.85 },
    { type: "TWR", frequency: 118.1 },
  ],
  identifiers: { icao: "SAWH", local: "USU", iata: "USH" },
  name: "Ushuaia / Malvinas Argentinas",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.3 },
    { type: "ILS/LOC", frequency: 111.3 },
    { type: "VOR", frequency: 113.7 },
  ],
  runways: [{ type: "concrete", orientations: ["07", "25"] }],
});
