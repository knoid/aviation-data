import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.00845, -59.34998],
  elevation: 137,
  frequencies: [],
  identifiers: { local: "LMD" },
  name: "Juan N. Fernández / La Madrugada",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
