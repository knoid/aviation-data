import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.75564, -60.49329],
  elevation: 94,
  frequencies: [],
  identifiers: { icao: "SARS", local: "PSP", iata: "PRQ" },
  name: "Presidencia Roque Sáenz Peña / Termal",
  radio_helpers: [{ type: "NDB", frequency: 205 }],
  reference: { direction: "NNW", distance: 3.2 },
  runways: [{ type: "concrete", orientations: ["03", "21"] }],
});
