import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-43.2105555555556, -65.2702777777778],
  elevation: 43,
  frequencies: [
    { type: "APP", frequency: 118.7 },
    { type: "ATIS", frequency: 127.7 },
    { type: "TWR", frequency: 118.7 },
  ],
  identifiers: { icao: "SAVT", local: "TRE", iata: "REL" },
  name: "Trelew / Almirante zar",
  radio_helpers: [
    { type: "GP/DME", frequency: 332.6 },
    { type: "ILS/LOC", frequency: 109.5 },
    { type: "VOR/DME", frequency: 115.1 },
  ],
  reference: { direction: "NNE", distance: 3.5 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
