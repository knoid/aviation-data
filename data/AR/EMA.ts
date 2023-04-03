import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-42.03, -71.1708333333333],
  elevation: 718,
  frequencies: [{ type: "AFIS", frequency: 118.4 }],
  identifiers: { icao: "SAVD", local: "EMA", iata: "EMX" },
  name: "El Maitén",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["06", "24"] },
    { type: "dirt", orientations: ["10", "28"] },
  ],
});
