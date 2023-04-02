import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-46.53848, -68.96583],
  elevation: 330,
  frequencies: [],
  identifiers: { icao: "SAVH", local: "CLH", iata: "LHS" },
  name: "Las Heras",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
