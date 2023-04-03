import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.9397222222222, -69.265],
  elevation: 650,
  frequencies: [{ type: "AFIS", frequency: 122.3 }],
  identifiers: { icao: "SAZW", local: "CUT", iata: "CUT" },
  name: "Cutral Có",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 1.1 },
  runways: [
    { type: "asphalt", orientations: ["03", "21"] },
    { type: "asphalt", orientations: ["07", "25"] },
  ],
});
