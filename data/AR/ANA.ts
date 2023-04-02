import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.7577777777778, -60.3738888888889],
  elevation: 60,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ANA" },
  name: "Paraná / Aeroclub",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 8.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
