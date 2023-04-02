import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.47845, -61.64441],
  elevation: 97,
  frequencies: [],
  identifiers: { local: "GDO" },
  name: "Gancedo / Pulverizaciones M. H.",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
