import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.5202777777778, -61.5508333333333],
  elevation: 98,
  frequencies: [],
  identifiers: { local: "LRT" },
  name: "Las Rosas / Horizonte Aplicaciones Aéreas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
