import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.4886111111111, -63.4330555555556],
  elevation: 125,
  frequencies: [],
  identifiers: { local: "CTP" },
  name: "Catriló / Establecimiento la María Pilar",
  radio_helpers: [],
  reference: { direction: "S", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
