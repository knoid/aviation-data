import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-31.7108333333333, -60.8113888888889],
  elevation: 17,
  frequencies: [
    { type: "APP", frequency: 118.95 },
    { type: "TWR", frequency: 118.95 },
  ],
  identifiers: { icao: "SAAV", local: "SVO", iata: "SFN" },
  name: "Santa fe / Sauce Viejo",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
  ],
  reference: { direction: "SSW", distance: 5.4 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
