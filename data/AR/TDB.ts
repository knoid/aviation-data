import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.2505555555556, -61.6516666666667],
  elevation: 87,
  frequencies: [],
  identifiers: { local: "TDB" },
  name: "El Trébol / De Bernardo",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
