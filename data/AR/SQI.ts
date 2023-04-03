import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.10557, -61.61348],
  elevation: 67,
  frequencies: [],
  identifiers: { local: "SQI" },
  name: "Cañada Rosquín",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
