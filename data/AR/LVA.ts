import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.8172222222222, -62.6302777777778],
  elevation: 126,
  frequencies: [],
  identifiers: { local: "LVA" },
  name: "Las Varas / Macias",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
