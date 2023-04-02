import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.5588888888889, -58.4163888888889],
  elevation: 5,
  frequencies: [
    { type: "APP", frequency: 120.6 },
    { type: "ATIS", frequency: 127.6 },
    { type: "CLRD", frequency: 129.3 },
    { type: "GND", frequency: 121.9 },
    { type: "TWR", frequency: 118.85 },
  ],
  identifiers: { icao: "SABE", local: "AER", iata: "AEP" },
  name: "Buenos Aires / Aeroparque J. Newbery",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "MM", frequency: 255.5 },
    { type: "NDB/LI", frequency: 505.7 },
    { type: "NDB/LI", frequency: 247.1 },
    { type: "OM", frequency: 113.1 },
  ],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "concrete", orientations: ["13", "31"] }],
});
