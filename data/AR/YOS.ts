import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.3855555555556, -60.3275],
  elevation: 122,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZH", local: "YOS", iata: "OYO" },
  name: "Tres Arroyos",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [
    { type: "asphalt", orientations: ["18", "36"] },
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["14", "32"] },
  ],
});
