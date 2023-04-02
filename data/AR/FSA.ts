import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-26.2127777777778, -58.2280555555556],
  elevation: 59,
  frequencies: [{ type: "TWR", frequency: 119.1 }],
  identifiers: { icao: "SARF", local: "FSA", iata: "FMA" },
  name: "Formosa",
  radio_helpers: [
    { type: "GP/DME", frequency: 330.8 },
    { type: "ILS/LOC", frequency: 110.9 },
    { type: "VOR/DME", frequency: 115.6 },
  ],
  reference: { direction: "S", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
