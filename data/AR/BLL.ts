import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.3547222222222, -58.1086111111111],
  elevation: 16,
  frequencies: [],
  identifiers: { local: "BLL" },
  name: "Miramar / Las Cortaderas",
  radio_helpers: [],
  reference: { direction: "SE", distance: 13 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
