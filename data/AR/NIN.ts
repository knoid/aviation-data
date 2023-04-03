import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.54589, -60.93051],
  elevation: 80,
  frequencies: [],
  identifiers: { icao: "SAAJ", local: "NIN", iata: "JNI" },
  name: "Junín",
  radio_helpers: [{ type: "VOR", frequency: 116.1 }],
  reference: { direction: "NNE", distance: 3.5 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
