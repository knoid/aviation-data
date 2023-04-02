import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-41.94323, -71.53215],
  elevation: 348,
  frequencies: [{ type: "AFIS", frequency: 118.4 }],
  identifiers: { icao: "SAVB", local: "BOL", iata: "EHL" },
  name: "El Bolsón",
  radio_helpers: [],
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
