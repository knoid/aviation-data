import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.8916666666667, -62.7047222222222],
  elevation: 135,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "LVL" },
  name: "Las Varillas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
