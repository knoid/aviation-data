import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.8575, -59.6727777777778],
  elevation: 56,
  frequencies: [],
  identifiers: { local: "LAN" },
  name: "Lanteri",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
