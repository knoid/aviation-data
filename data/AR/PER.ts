import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.9202777777778, -60.6480555555556],
  elevation: 72,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { icao: "SAAN", local: "PER" },
  name: "Pergamino",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.4 },
  runways: [
    { type: "asphalt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
