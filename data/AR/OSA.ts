import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-36.5883333333333, -64.2758333333333],
  elevation: 192,
  frequencies: [
    { type: "APP", frequency: 118.3 },
    { type: "TWR", frequency: 118.3 },
  ],
  identifiers: { icao: "SAZR", local: "OSA", iata: "RSA" },
  name: "Santa Rosa",
  radio_helpers: [
    { type: "GP/DME", frequency: 335 },
    { type: "ILS/LOC", frequency: 110.3 },
    { type: "VOR/DME", frequency: 112.5 },
  ],
  reference: { direction: "NNE", distance: 2.4 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
