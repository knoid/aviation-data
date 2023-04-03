import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.54661, -63.12451],
  elevation: 130,
  frequencies: [],
  identifiers: { local: "SRE" },
  name: "Santa Regina / Fortín de Gainza",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
