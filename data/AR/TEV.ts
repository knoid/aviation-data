import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.8952777777778, -62.3097222222222],
  elevation: 68,
  frequencies: [],
  identifiers: { local: "TEV" },
  name: "Tintina / Establecimiento el 21",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 22 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
