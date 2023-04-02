import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.8711111111111, -61.9511111111111],
  elevation: 105,
  frequencies: [{ type: "COM", frequency: 123.4 }],
  identifiers: { local: "SJB" },
  name: "San Jorge / Bocca",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
