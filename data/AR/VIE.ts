import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-40.8702777777778, -62.9966666666667],
  elevation: 6,
  frequencies: [
    { type: "APP", frequency: 118.3 },
    { type: "TWR", frequency: 118.3 },
  ],
  identifiers: { icao: "SAVV", local: "VIE", iata: "VDM" },
  name: "Viedma / Gobernador Castello",
  radio_helpers: [{ type: "VOR", frequency: 117.1 }],
  reference: { direction: "S", distance: 3.2 },
  runways: [
    { type: "asphalt", orientations: ["02", "20"] },
    { type: "asphalt", orientations: ["11", "29"] },
  ],
});
