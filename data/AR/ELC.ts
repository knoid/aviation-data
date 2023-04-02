import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.5366666666667, -60.1291666666667],
  elevation: 48,
  frequencies: [],
  identifiers: { local: "ELC" },
  name: "25 De Mayo / Estancia la Criolla",
  radio_helpers: [],
  reference: { direction: "SE", distance: 6.5 },
  runways: [{ type: "asphalt", orientations: ["05", "23"] }],
});
