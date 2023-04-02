import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.7283333333333, -58.5005555555556],
  elevation: 3,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SADZ", local: "MAT" },
  name: "Matanza",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
