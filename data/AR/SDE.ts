import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-27.7655555555556, -64.31],
  elevation: 200,
  frequencies: [
    { type: "APP", frequency: 118.7 },
    { type: "TWR", frequency: 118.7 },
  ],
  identifiers: { icao: "SANE", local: "SDE", iata: "SDE" },
  name: "Santiago del Estero / Vcom. Ángel D. La paz Aragonés",
  radio_helpers: [{ type: "VOR", frequency: 114.8 }],
  reference: { direction: "NNW", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["03", "21"] }],
});
