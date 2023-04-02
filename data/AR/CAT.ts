import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-28.5930555555556, -65.7511111111111],
  elevation: 464,
  frequencies: [
    { type: "APP", frequency: 118.15 },
    { type: "TWR", frequency: 118.15 },
  ],
  identifiers: { icao: "SANC", local: "CAT", iata: "CTC" },
  name: "Catamarca",
  radio_helpers: [{ type: "VOR/DME", frequency: 114.3 }],
  reference: { direction: "SSE", distance: 8.1 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
