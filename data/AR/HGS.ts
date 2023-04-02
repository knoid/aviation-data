import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.8111111111111, -61.3375],
  elevation: 97,
  frequencies: [],
  identifiers: { local: "HGS" },
  name: "Santa fe / Hughes Plus Agroservicios Aereos S.R.L.",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
