import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.00589, -64.5321],
  elevation: 1138,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { icao: "SACC", local: "CUM", iata: "LCM" },
  name: "La Cumbre",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
