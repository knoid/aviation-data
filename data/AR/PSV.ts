import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.78309, -60.48741],
  frequencies: [],
  identifiers: { local: "PSV" },
  name: "Presidencia Roque Sáenz Peña / Rovere",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
