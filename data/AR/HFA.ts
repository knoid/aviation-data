import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.58598, -58.368051],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "HFA" },
  name: "Buenos Aires / Fuerza Aérea (Edificio Cóndor)",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0.27 },
  runways: [],
});
