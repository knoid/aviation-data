import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.32, -57.7205555555556],
  elevation: 10,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZD", local: "DOL" },
  name: "Dolores",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
