import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.45761, -63.31375],
  elevation: 154,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "LCT" },
  name: "La Carlota / Aeroclub",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
