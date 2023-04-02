import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.1055, -63.19298],
  elevation: 138,
  frequencies: [],
  identifiers: { local: "PAN" },
  name: "Pascanas / El Recuerdo S.R.L.",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 7.6 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
