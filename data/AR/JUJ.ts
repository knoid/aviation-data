import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-24.3925, -65.0977777777778],
  elevation: 920,
  frequencies: [
    { type: "APP", frequency: 118.7 },
    { type: "TWR", frequency: 118.7 },
  ],
  identifiers: { icao: "SASJ", local: "JUJ", iata: "JUJ" },
  name: "Jujuy / Gobernador Guzmán",
  radio_helpers: [
    { type: "GP/DME", frequency: 334.4 },
    { type: "ILS/LOC", frequency: 110.1 },
    { type: "VOR/DME", frequency: 112.9 },
  ],
  reference: { direction: "SE", distance: 18 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
