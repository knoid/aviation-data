import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.44609, -61.88934],
  elevation: 234,
  frequencies: [],
  identifiers: { icao: "SAZC", local: "SUZ", iata: "CSZ" },
  name: "Coronel Suárez / Brig. D. H. E. Ruiz",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.6 },
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
