import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-35.4952777777778, -69.5730555555556],
  elevation: 1424,
  frequencies: [
    { type: "APP", frequency: 118.25 },
    { type: "TWR", frequency: 118.25 },
  ],
  identifiers: { icao: "SAMM", local: "MLG", iata: "LGS" },
  name: "Malargüe / Comodoro D. R. Salomón",
  radio_helpers: [{ type: "VOR/DME", frequency: 117.2 }],
  reference: { direction: "S", distance: 0.54 },
  runways: [
    { type: "asphalt", orientations: ["09", "27"] },
    { type: "asphalt", orientations: ["14", "32"] },
  ],
});
