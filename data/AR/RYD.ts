import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-33.73178, -65.37579],
  elevation: 485,
  frequencies: [
    { type: "APP", frequency: 119.3 },
    { type: "TWR", frequency: 119.3 },
  ],
  identifiers: { icao: "SAOR", local: "RYD", iata: "VME" },
  name: "Villa Reynolds",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "VOR/DME", frequency: 115.7 },
  ],
  reference: { direction: "SE", distance: 4.9 },
  runways: [
    { type: "asphalt", orientations: ["06", "24"] },
    { type: "asphalt", orientations: ["10", "28"] },
  ],
});
