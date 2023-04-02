import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.8222222222222, -58.5358333333333],
  elevation: 20,
  frequencies: [
    { type: "APP", frequency: 119.9 },
    { type: "ATIS", frequency: 127.8 },
    { type: "CLRD", frequency: 127.1 },
    { type: "GND", frequency: 121.75 },
    { type: "TWR", frequency: 118.6 },
  ],
  identifiers: { icao: "SAEZ", local: "EZE", iata: "EZE" },
  name: "Ezeiza / Ministro Pistarini",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.5 },
    { type: "GP/DME", frequency: 334.4 },
    { type: "ILS/LOC", frequency: 108.7 },
    { type: "ILS/LOC", frequency: 110.1 },
    { type: "IM", frequency: 906.74 },
    { type: "NDB", frequency: 325 },
    { type: "OM", frequency: 325.07 },
    { type: "VOR", frequency: 116.5 },
  ],
  reference: { direction: "SSW", distance: 12 },
  runways: [
    { type: "concrete", orientations: ["11", "29"] },
    { type: "concrete", orientations: ["17", "35"] },
  ],
});
