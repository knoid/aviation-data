import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.44736, -59.86611],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "NOT" },
  name: "Nogoyá / Tognoli",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.1 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
