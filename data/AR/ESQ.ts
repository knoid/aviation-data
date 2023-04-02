import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-42.90381, -71.13554],
  elevation: 799,
  frequencies: [
    { type: "APP", frequency: 118.8 },
    { type: "TWR", frequency: 118.8 },
  ],
  identifiers: { icao: "SAVE", local: "ESQ", iata: "EQS" },
  name: "Esquel / Brigadier General Antonio Parodi",
  radio_helpers: [
    { type: "GP/DME", frequency: 333.2 },
    { type: "ILS/LOC", frequency: 109.7 },
    { type: "VOR/DME", frequency: 117.8 },
  ],
  reference: { direction: "ESE", distance: 6.5 },
  runways: [
    { type: "asphalt", orientations: ["05", "23"] },
    { type: "dirt", orientations: ["08", "26"] },
  ],
});
