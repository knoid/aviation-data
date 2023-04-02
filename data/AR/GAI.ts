import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.49486, -61.65877],
  elevation: 115,
  frequencies: [],
  identifiers: { local: "GAI" },
  name: "Gancedo / Agroaire",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
