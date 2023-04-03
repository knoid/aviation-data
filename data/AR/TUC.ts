import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-26.8408333333333, -65.1047222222222],
  elevation: 455,
  frequencies: [
    { type: "APP", frequency: 119.5 },
    { type: "ATIS", frequency: 127.7 },
    { type: "GND", frequency: 121.75 },
    { type: "TMA", frequency: 123.85 },
    { type: "TWR", frequency: 119.5 },
  ],
  identifiers: { icao: "SANT", local: "TUC", iata: "TUC" },
  name: "Tucumán / Teniente Benjamín Matienzo",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.8 },
    { type: "ILS/LOC", frequency: 109.9 },
    { type: "VOR/DME", frequency: 114.1 },
  ],
  reference: { direction: "E", distance: 6.5 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
