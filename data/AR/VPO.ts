import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-28.49598, -59.32612],
  elevation: 49,
  frequencies: [{ type: "COM", frequency: 122.1 }],
  identifiers: { local: "VPO" },
  name: "Villa Ocampo",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
