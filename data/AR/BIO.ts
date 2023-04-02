import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-51.60502, -72.22034],
  elevation: 273,
  frequencies: [],
  identifiers: { icao: "SAWT", local: "BIO", iata: "RYO" },
  name: "El Turbio / 28 De Noviembre",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 5.4 },
  runways: [
    { type: "dirt", orientations: ["14", "32"] },
    { type: "asphalt", orientations: ["06", "24"] },
  ],
});
