import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-29.10595, -59.21874],
  elevation: 39,
  frequencies: [
    { type: "TMA", frequency: 120.85 },
    { type: "TWR", frequency: 118.1 },
  ],
  identifiers: { icao: "SATG", local: "GOY", iata: "OYA" },
  name: "Goya",
  radio_helpers: [],
  reference: { direction: "NE", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
