import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.11159, -61.63196],
  elevation: 73,
  frequencies: [],
  identifiers: { local: "CBB" },
  name: "Cañada Rosquín / B&B Servicios Agropecuarios",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
