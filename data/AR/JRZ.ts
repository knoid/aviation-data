import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.7061111111111, -59.7919444444444],
  elevation: 212,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZJ", local: "JRZ" },
  name: "Juárez",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["08", "26"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
