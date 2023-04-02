import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.8822222222222, -64.275],
  elevation: 183,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ECX" },
  name: "Eduardo Castex",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
