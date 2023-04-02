import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.8447222222222, -65.3247222222222],
  elevation: 448,
  frequencies: [],
  identifiers: { local: "VMT" },
  name: "Villa Mercedes / Las Totoritas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 11 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
