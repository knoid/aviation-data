import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.96087, -60.88698],
  elevation: 44,
  frequencies: [],
  identifiers: { local: "PEL" },
  name: "La Pelada",
  radio_helpers: [],
  reference: { direction: "SE", distance: 7 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
