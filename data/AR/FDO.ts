import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.45454, -58.59091],
  elevation: 3,
  frequencies: [
    { type: "ATIS", frequency: 127.65 },
    { type: "CLRD", frequency: 129.5 },
    { type: "GND", frequency: 121.85 },
    { type: "TWR", frequency: 119 },
  ],
  identifiers: { icao: "SADF", local: "FDO", iata: "FDO" },
  name: "San Fernando",
  radio_helpers: [
    { type: "GP/DME", frequency: 331.4 },
    { type: "ILS/LOC", frequency: 109.1 },
    { type: "VOR/DME", frequency: 114.4 },
  ],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["05", "23"] }],
});
