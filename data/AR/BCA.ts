import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-38.7275, -62.1533333333333],
  elevation: 75,
  frequencies: [
    { type: "APP", frequency: 119.15 },
    { type: "GND", frequency: 121.9 },
    { type: "TMA", frequency: 124.8 },
    { type: "TWR", frequency: 119.15 },
  ],
  identifiers: { icao: "SAZB", local: "BCA", iata: "BHI" },
  name: "Bahía Blanca / Cte. Espora",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.2 },
    { type: "ILS/LOC", frequency: 109.7 },
    { type: "VOR/DME", frequency: 114.3 },
  ],
  reference: { direction: "E", distance: 5.4 },
  runways: [
    { type: "asphalt", orientations: ["17L", "35R"] },
    { type: "asphalt", orientations: ["17R", "35L"] },
    { type: "asphalt", orientations: ["06", "24"] },
  ],
});
