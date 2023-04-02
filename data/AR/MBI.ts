import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-64.23913, -56.63085],
  elevation: 209,
  frequencies: [{ type: "TWR", frequency: 118.1 }],
  identifiers: { icao: "SAWB", local: "MBI" },
  name: "Vicecomodoro Marambio",
  radio_helpers: [{ type: "VOR/DME", frequency: 117 }],
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
