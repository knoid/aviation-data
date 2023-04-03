import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.2858333333333, -64.4555555555555],
  elevation: 700,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CQN" },
  name: "Cosquín / Santa María",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["03", "21"] }],
});
