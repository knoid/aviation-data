import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.8086111111111, -60.4516666666667],
  elevation: 59,
  frequencies: [],
  identifiers: { local: "SBE" },
  name: "San Benito",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.5 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
