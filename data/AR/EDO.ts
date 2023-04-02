import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.48679, -64.14083],
  elevation: 432,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SACD", local: "EDO" },
  name: "Coronel Olmedo",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.65 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
