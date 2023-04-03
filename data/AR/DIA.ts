import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-31.2969444444444, -57.9966666666667],
  elevation: 34,
  frequencies: [{ type: "TWR", frequency: 118.3 }],
  identifiers: { icao: "SAAC", local: "DIA", iata: "COC" },
  name: "Concordia / Comodoro Juan José Pierrestegui",
  radio_helpers: [],
  reference: { direction: "N", distance: 6.5 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
