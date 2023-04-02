import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.2261111111111, -57.8708333333333],
  elevation: 13,
  frequencies: [
    { type: "AFIS", frequency: 122.1 },
    { type: "TWR", frequency: 118.45 },
  ],
  identifiers: { icao: "SAEM", local: "IRA" },
  name: "Miramar / Aeródromo Juan Domingo Perón",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "asphalt", orientations: ["18", "36"] },
    { type: "dirt", orientations: ["09", "27"] },
  ],
});
