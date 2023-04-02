import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.3672222222222, -59.9780555555556],
  elevation: 54,
  frequencies: [],
  identifiers: { local: "MLA" },
  name: "Malabrigo",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
