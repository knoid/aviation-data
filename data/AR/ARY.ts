import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.4222222222222, -63.005],
  elevation: 148,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ARY" },
  name: "Arroyito / Arcor",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
