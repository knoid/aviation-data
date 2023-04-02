import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.3994444444444, -60.9333333333333],
  elevation: 75,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZX", local: "LIO" },
  name: "Nueve de Julio",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.7 },
  runways: [
    { type: "dirt", orientations: ["13", "31"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
