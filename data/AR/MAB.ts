import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.78639, -62.12792],
  elevation: 109,
  frequencies: [],
  identifiers: { local: "MAB" },
  name: "Maggiolo / Samave",
  radio_helpers: [],
  reference: { direction: "SE", distance: 7 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
