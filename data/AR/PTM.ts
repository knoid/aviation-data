import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-46.53844, -70.97879],
  elevation: 430,
  frequencies: [{ type: "AFIS", frequency: 118.1 }],
  identifiers: { icao: "SAWP", local: "PTM", iata: "PMQ" },
  name: "Perito Moreno",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["10", "28"] }],
});
