import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.4381666666667, -63.2893055555556],
  elevation: 206,
  frequencies: [],
  identifiers: { local: "VNR" },
  name: "Villa Nueva / Raig S.A.",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
