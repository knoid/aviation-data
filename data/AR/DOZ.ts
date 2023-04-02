import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-32.8316666666667, -68.7927777777778],
  elevation: 704,
  frequencies: [
    { type: "APP", frequency: 119.9 },
    { type: "ATIS", frequency: 127.6 },
    { type: "GND", frequency: 121.95 },
    { type: "TMA", frequency: 124.2 },
    { type: "TWR", frequency: 119.9 },
  ],
  identifiers: { icao: "SAME", local: "DOZ", iata: "MDZ" },
  name: "Mendoza / El Plumerillo",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.8 },
    { type: "ILS/LOC", frequency: 109.9 },
    { type: "VOR/DME", frequency: 114.9 },
  ],
  reference: { direction: "NE", distance: 4.3 },
  runways: [{ type: "concrete", orientations: ["18", "36"] }],
});
