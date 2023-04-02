import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-22.16195, -65.57207],
  elevation: 3480,
  frequencies: [],
  identifiers: { icao: "SASQ", local: "IAC" },
  name: "La Quiaca / Dr. Guillermo Eugenio Snopek",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
