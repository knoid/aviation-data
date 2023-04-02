import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.52042, -58.39961],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "EZA" },
  name: "Los Conquistadores / Buena Esperanza",
  radio_helpers: [],
  reference: { direction: "NE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
