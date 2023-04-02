import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.7366666666667, -62.5311111111111],
  elevation: 115,
  frequencies: [],
  identifiers: { local: "SMS" },
  name: "San Marcos / Chialva S. H.",
  radio_helpers: [],
  reference: { direction: "SE", distance: 10 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
