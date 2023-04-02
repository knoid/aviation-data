import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-41.1511111111111, -71.1577777777778],
  elevation: 846,
  frequencies: [
    { type: "APP", frequency: 119.1 },
    { type: "ATIS", frequency: 127.9 },
    { type: "GND", frequency: 121.8 },
    { type: "TWR", frequency: 119.1 },
  ],
  identifiers: { icao: "SAZS", local: "BAR", iata: "BRC" },
  name: "San Carlos de Bariloche",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "VOR/DME", frequency: 117.4 },
  ],
  reference: { direction: "E", distance: 7 },
  runways: [{ type: "concrete", orientations: ["11", "29"] }],
});
