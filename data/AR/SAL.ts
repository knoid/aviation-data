import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-24.8597222222222, -65.4869444444444],
  elevation: 1246,
  frequencies: [
    { type: "APP", frequency: 124.6 },
    { type: "TMA", frequency: 124.6 },
    { type: "TWR", frequency: 128.85 },
  ],
  identifiers: { icao: "SASA", local: "SAL", iata: "SLA" },
  name: "Salta / General D. Martín Miguel de Güemes",
  radio_helpers: [
    { type: "GP/DME", frequency: 209.5 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 116.7 },
  ],
  reference: { direction: "SW", distance: 3.2 },
  runways: [
    { type: "asphalt", orientations: ["02", "20"] },
    { type: "asphalt", orientations: ["06", "24"] },
  ],
});
