import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.5878166666666, -68.4035888888889],
  elevation: 753,
  frequencies: [
    { type: "APP", frequency: 118.1 },
    { type: "TWR", frequency: 118.1 },
  ],
  identifiers: { icao: "SAMR", local: "SRA", iata: "AFA" },
  name: "San Rafael / S. A. Santiago Germano",
  radio_helpers: [{ type: "VOR/DME", frequency: 116.9 }],
  reference: { direction: "W", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["11", "29"] }],
});
