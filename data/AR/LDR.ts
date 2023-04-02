import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.9475, -65.1475],
  elevation: 563,
  frequencies: [],
  identifiers: { icao: "SAOD", local: "LDR", iata: "VDR" },
  name: "Villa Dolores",
  radio_helpers: [],
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
