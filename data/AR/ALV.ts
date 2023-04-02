import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.06853, -60.66682],
  elevation: 32,
  frequencies: [],
  identifiers: { local: "ALV" },
  name: "Alvear / Agroalvear S.R.L.",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
