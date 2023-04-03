import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-35.84451, -61.85748],
  elevation: 85,
  frequencies: [{ type: "COM", frequency: 118.35 }],
  identifiers: { icao: "SAZP", local: "PEH", iata: "PEH" },
  name: "Pehuajó / Com. Pedro Zanni",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
