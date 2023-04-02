import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.44296, -62.87927],
  elevation: 116,
  frequencies: [],
  identifiers: { local: "JMB" },
  name: "Tres Lomas",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
