import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.6061111111111, -62.3819444444444],
  elevation: 312,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZE", local: "PIG" },
  name: "Pigüé",
  radio_helpers: [],
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
