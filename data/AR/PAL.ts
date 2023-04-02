import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.61, -58.6125],
  elevation: 18,
  frequencies: [
    { type: "ATIS", frequency: 127.63 },
    { type: "GND", frequency: 121.95 },
    { type: "TWR", frequency: 120.3 },
  ],
  identifiers: { icao: "SADP", local: "PAL", iata: "EPA" },
  name: "El Palomar",
  radio_helpers: [
    { type: "GP/DME", frequency: 329.6 },
    { type: "ILS/LOC", frequency: 110.5 },
    { type: "VOR/DME", frequency: 115.2 },
  ],
  runways: [{ type: "concrete", orientations: ["17", "35"] }],
});
