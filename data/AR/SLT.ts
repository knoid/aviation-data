import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.3065, -60.28678],
  elevation: 59,
  frequencies: [],
  identifiers: { local: "SLT" },
  name: "Salto",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
