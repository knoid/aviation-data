import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.3013888888889, -58.2983333333333],
  elevation: 70,
  frequencies: [],
  identifiers: { local: "FOR" },
  name: "Formosa / Aeroclub",
  radio_helpers: [],
  reference: { direction: "SW", distance: 8.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
