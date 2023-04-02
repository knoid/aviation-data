import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-38.9488888888889, -68.1558333333333],
  elevation: 273,
  frequencies: [
    { type: "APP", frequency: 119.8 },
    { type: "ATIS", frequency: 127.65 },
    { type: "GND", frequency: 121.8 },
    { type: "TWR", frequency: 119.8 },
  ],
  identifiers: { icao: "SAZN", local: "NEU", iata: "NQN" },
  name: "Neuquén / Presidente Perón",
  radio_helpers: [
    { type: "GP/DME", frequency: 700.3 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 116.7 },
  ],
  reference: { direction: "WNW", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
