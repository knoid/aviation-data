import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.23552, -61.78845],
  elevation: 69,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TOS" },
  name: "Tostado",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
