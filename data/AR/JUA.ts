import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-31.5713888888889, -68.4183333333333],
  elevation: 597,
  frequencies: [
    { type: "APP", frequency: 119.35 },
    { type: "TWR", frequency: 119.35 },
  ],
  identifiers: { icao: "SANU", local: "JUA", iata: "UAQ" },
  name: "San Juan / Domingo Faustino Sarmiento",
  radio_helpers: [
    { type: "GP/DME", frequency: 335 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 113.1 },
  ],
  reference: { direction: "SE", distance: 6.5 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
