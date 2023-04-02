import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.3872222222222, -57.9683333333333],
  elevation: 71,
  frequencies: [],
  identifiers: { local: "MCP" },
  name: "Monte Caseros / El Pilincho",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 19 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
