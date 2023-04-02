import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.75226, -65.28158],
  elevation: 751,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TLS" },
  name: "Tilisarao",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
