import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-37.2343777777778, -59.2285861111111],
  elevation: 175,
  frequencies: [
    { type: "APP", frequency: 120.9 },
    { type: "TMA", frequency: 120.9 },
    { type: "TWR", frequency: 120.9 },
  ],
  identifiers: { icao: "SAZT", local: "DIL", iata: "TDL" },
  name: "Tandil / Héroes de Malvinas",
  radio_helpers: [
    { type: "GP", frequency: 333.8 },
    { type: "ILS/LOC", frequency: 109.9 },
    { type: "MM", frequency: 248.72 },
    { type: "VOR/DME", frequency: 115.9 },
  ],
  reference: { direction: "NW", distance: 7 },
  runways: [{ type: "concrete", orientations: ["01", "19"] }],
});
