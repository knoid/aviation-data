import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-32.9036111111111, -60.7844444444444],
  elevation: 26,
  frequencies: [
    { type: "APP", frequency: 118.7 },
    { type: "ATIS", frequency: 127.4 },
    { type: "GND", frequency: 121.85 },
    { type: "TMA", frequency: 125.4 },
    { type: "TWR", frequency: 118.7 },
  ],
  identifiers: { icao: "SAAR", local: "ROS", iata: "ROS" },
  name: "Rosario / Islas Malvinas",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.8 },
    { type: "ILS/LOC", frequency: 109.9 },
    { type: "VOR/DME", frequency: 117.3 },
  ],
  reference: { direction: "WNW", distance: 7 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
