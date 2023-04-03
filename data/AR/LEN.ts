import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.2986111111111, -58.7988888888889],
  elevation: 4,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "LEN" },
  name: "Belén de Escobar",
  radio_helpers: [],
  reference: { direction: "S", distance: 0 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
