import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.48954, -58.81626],
  elevation: 22,
  frequencies: [{ type: "AFIS", frequency: 118.1 }],
  identifiers: { icao: "SAZO", local: "NEC", iata: "NEC" },
  name: "Necochea",
  radio_helpers: [],
  reference: { direction: "NE", distance: 5.4 },
  runways: [
    { type: "dirt", orientations: ["17", "35"] },
    { type: "asphalt", orientations: ["18", "36"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
