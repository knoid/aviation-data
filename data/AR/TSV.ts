import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.9988888888889, -61.7780555555556],
  elevation: 70,
  frequencies: [],
  identifiers: { local: "TSV" },
  name: "Tortugas / Estancia San Vicente",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 15 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
