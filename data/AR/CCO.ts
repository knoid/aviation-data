import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.64817, -61.35038],
  elevation: 82,
  frequencies: [],
  identifiers: { local: "CCO" },
  name: "Carlos Casares / Ottaviani",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
