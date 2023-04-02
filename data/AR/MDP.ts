import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-37.9341666666667, -57.5733333333333],
  elevation: 22,
  frequencies: [
    { type: "APP", frequency: 118.75 },
    { type: "GND", frequency: 121.7 },
    { type: "TMA", frequency: 118.75 },
    { type: "TWR", frequency: 118.75 },
  ],
  identifiers: { icao: "SAZM", local: "MDP", iata: "MDQ" },
  name: "Mar del Plata / Astor Piazzolla",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "VOR/DME", frequency: 116.2 },
  ],
  reference: { direction: "N", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["13", "31"] }],
});
