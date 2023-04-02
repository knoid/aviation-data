import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.04089, -67.57759],
  elevation: 1210,
  frequencies: [],
  identifiers: { icao: "SANI", local: "TIN" },
  name: "Tinogasta",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.54 },
  runways: [{ type: "asphalt", orientations: ["15", "33"] }],
});
