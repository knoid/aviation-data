import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-32.3847222222222, -65.1858333333333],
  elevation: 616,
  frequencies: [
    { type: "APP", frequency: 119.95 },
    { type: "TWR", frequency: 119.95 },
  ],
  identifiers: { icao: "SAOS", local: "SRC", iata: "RLO" },
  name: "Valle del Conlara",
  radio_helpers: [{ type: "VOR/DME", frequency: 117.5 }],
  reference: { direction: "SSE", distance: 2.4 },
  runways: [{ type: "concrete", orientations: ["02", "20"] }],
});
