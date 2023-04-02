import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-49.30671, -67.80282],
  elevation: 62,
  frequencies: [],
  identifiers: { icao: "SAWJ", local: "SJU", iata: "ULA" },
  name: "San Julián / Capitan D. Daniel Vázquez",
  radio_helpers: [{ type: "VOR/DME", frequency: 117.7 }],
  reference: { direction: "W", distance: 3.8 },
  runways: [{ type: "concrete", orientations: ["07", "25"] }],
});
