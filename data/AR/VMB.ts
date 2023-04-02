import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.93757, -64.41509],
  elevation: 241,
  frequencies: [],
  identifiers: { local: "VMB" },
  name: "Vicuña Mackenna / Beneficios S.R.L.",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
