import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.85864, -59.46911],
  elevation: 26,
  frequencies: [],
  identifiers: { local: "BEX" },
  name: "Baradero / Buenos Aires",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
