import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-53.7776, -67.74952],
  elevation: 20,
  frequencies: [
    { type: "APP", frequency: 118.3 },
    { type: "TWR", frequency: 118.3 },
  ],
  identifiers: { icao: "SAWE", local: "GRA", iata: "RGA" },
  name: "Río Grande",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "NDB/LI", frequency: 636.6 },
    { type: "VOR/DME", frequency: 117.3 },
  ],
  reference: { direction: "NW", distance: 4.9 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
