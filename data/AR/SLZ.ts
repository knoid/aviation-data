import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.3502777777778, -62.2269444444444],
  elevation: 104,
  frequencies: [],
  identifiers: { local: "SLZ" },
  name: "Salazar / Eo. el Triángulo",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
