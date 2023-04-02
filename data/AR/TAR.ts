import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-22.6183333333333, -63.7930555555556],
  elevation: 449,
  frequencies: [{ type: "AFIS", frequency: 118.6 }],
  identifiers: { icao: "SAST", local: "TAR", iata: "TTG" },
  name: "Tartagal / General E. Mosconi",
  radio_helpers: [{ type: "NDB/LI", frequency: 415 }],
  reference: { direction: "S", distance: 5.9 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
