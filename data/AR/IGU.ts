import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-25.73722, -54.47354],
  elevation: 279,
  frequencies: [
    { type: "APP", frequency: 120.7 },
    { type: "ATIS", frequency: 127.7 },
    { type: "GND", frequency: 121.8 },
    { type: "TWR", frequency: 120.7 },
  ],
  identifiers: { icao: "SARI", local: "IGU", iata: "IGR" },
  name: "Cataratas del Iguazú / My. D. C. E. Krause",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.8 },
    { type: "ILS/LOC", frequency: 110.9 },
    { type: "MM", frequency: 453 },
    { type: "VOR/DME", frequency: 114.1 },
  ],
  reference: { direction: "SSE", distance: 9.7 },
  runways: [{ type: "asphalt", orientations: ["13", "31"] }],
});
