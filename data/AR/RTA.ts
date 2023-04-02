import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-29.2102777777778, -59.68],
  elevation: 49,
  frequencies: [
    { type: "APP", frequency: 120.85 },
    { type: "TWR", frequency: 120.85 },
  ],
  identifiers: { icao: "SATR", local: "RTA", iata: "RCQ" },
  name: "Reconquista",
  radio_helpers: [{ type: "VOR/DME", frequency: 117.1 }],
  reference: { direction: "S", distance: 3.8 },
  runways: [
    { type: "concrete", orientations: ["02", "20"] },
    { type: "concrete", orientations: ["10", "28"] },
  ],
});
