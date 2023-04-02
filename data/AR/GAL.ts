import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-51.60881, -69.31217],
  elevation: 19,
  frequencies: [
    { type: "ATIS", frequency: 127.6 },
    { type: "TMA", frequency: 124.7 },
    { type: "TWR", frequency: 119.4 },
  ],
  identifiers: { icao: "SAWG", local: "GAL", iata: "RGL" },
  name: "Río Gallegos / Piloto Civil N. Fernández",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 2.4 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
