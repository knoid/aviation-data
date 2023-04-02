import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-45.7852777777778, -67.4655555555556],
  elevation: 57,
  frequencies: [
    { type: "TMA", frequency: 124.3 },
    { type: "TWR", frequency: 119.9 },
  ],
  identifiers: { icao: "SAVC", local: "CRV", iata: "CRD" },
  name: "Comodoro Rivadavia / Gral. E. Mosconi",
  radio_helpers: [
    { type: "GP/DME", frequency: 655.6 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "MM", frequency: 602.7 },
    { type: "OM", frequency: 623.1 },
    { type: "VOR/DME", frequency: 117.5 },
  ],
  reference: { direction: "N", distance: 5.9 },
  runways: [{ type: "concrete", orientations: ["07", "25"] }],
});
