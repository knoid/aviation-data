import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-31.31, -64.2083333333333],
  elevation: 489,
  frequencies: [
    { type: "APP", frequency: 118.3 },
    { type: "ATIS", frequency: 127.5 },
    { type: "CLRD", frequency: 129.3 },
    { type: "GND", frequency: 121.75 },
    { type: "TMA", frequency: 119.1 },
    { type: "TWR", frequency: 118.3 },
  ],
  identifiers: { icao: "SACO", local: "CBA", iata: "COR" },
  name: "Córdoba / Ing. aer. A.L.V. Taravella",
  radio_helpers: [
    { type: "GP/DME", frequency: 756.9 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "NDB/LI", frequency: 710.9 },
    { type: "VOR/DME", frequency: 114.5 },
  ],
  reference: { direction: "NNW", distance: 4.9 },
  runways: [
    { type: "asphalt", orientations: ["05", "23"] },
    { type: "concrete", orientations: ["01", "19"] },
  ],
});
