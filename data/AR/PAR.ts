import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-31.7947222222222, -60.4802777777778],
  elevation: 74,
  frequencies: [
    { type: "APP", frequency: 119.6 },
    { type: "TWR", frequency: 119.6 },
  ],
  identifiers: { icao: "SAAP", local: "PAR", iata: "PRA" },
  name: "Paraná / Aeropuerto General Justo José De Urquiza",
  radio_helpers: [
    { type: "GP/DME", frequency: 335 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 116.8 },
  ],
  reference: { direction: "SE", distance: 4 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
