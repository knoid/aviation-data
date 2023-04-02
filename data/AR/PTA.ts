import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.9691666666667, -57.8930555555556],
  elevation: 22,
  frequencies: [{ type: "AFIS", frequency: 119.3 }],
  identifiers: { icao: "SADL", local: "PTA", iata: "LPG" },
  name: "La Plata",
  radio_helpers: [{ type: "VOR", frequency: 113.7 }],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
