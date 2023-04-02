import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.3486111111111, -63.73],
  elevation: 210,
  frequencies: [],
  identifiers: { local: "ALR" },
  name: "Aeroclub Alejandro Roca",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
