import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.6643111111111, -62.3750555555556],
  elevation: 121,
  frequencies: [],
  identifiers: { local: "COA" },
  name: "Arias",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
