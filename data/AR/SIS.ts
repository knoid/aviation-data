import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-27.45, -59.0561111111111],
  elevation: 53,
  frequencies: [
    { type: "APP", frequency: 118.7 },
    { type: "ATIS", frequency: 127.85 },
    { type: "GND", frequency: 121.95 },
    { type: "TMA", frequency: 119.4 },
    { type: "TWR", frequency: 118.7 },
  ],
  identifiers: { icao: "SARE", local: "SIS", iata: "RES" },
  name: "Resistencia",
  radio_helpers: [
    { type: "GP/DME", frequency: 627.84 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 115.1 },
  ],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
