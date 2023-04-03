import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.64155, -60.7534],
  frequencies: [],
  identifiers: { local: "PST" },
  name: "Puerto San Martín / Terminal 6",
  radio_helpers: [],
  reference: { direction: "N", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
