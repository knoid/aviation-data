import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.24674, -62.41538],
  elevation: 118,
  frequencies: [],
  identifiers: { local: "IVB" },
  name: "Isla Verde / D. Héctor Biondi",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
