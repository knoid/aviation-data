import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-50.28, -72.0530555555556],
  elevation: 204,
  frequencies: [
    { type: "ATIS", frequency: 127.85 },
    { type: "TWR", frequency: 119.95 },
  ],
  identifiers: { icao: "SAWC", local: "ECA", iata: "FTE" },
  name: "El Calafate / Comandante Armando Tola",
  radio_helpers: [
    { type: "GP/DME", frequency: 329.3 },
    { type: "ILS/LOC", frequency: 108.9 },
    { type: "VOR/DME", frequency: 114.7 },
  ],
  reference: { direction: "ENE", distance: 9 },
  runways: [{ type: "concrete", orientations: ["07", "25"] }],
});
