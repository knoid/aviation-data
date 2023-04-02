import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.0622222222222, -68.5094444444444],
  elevation: 696,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAMI", local: "STI" },
  name: "San Martín",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.6 },
  runways: [
    { type: "asphalt", orientations: ["03", "21"] },
    { type: "dirt", orientations: ["04", "22"] },
  ],
});
