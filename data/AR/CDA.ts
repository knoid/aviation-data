import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.46586, -60.62857],
  elevation: 56,
  frequencies: [],
  identifiers: { local: "CDA" },
  name: "Sargento Cabral / Cóndor del Aire",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
