import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.95314, -54.48789],
  elevation: 550,
  frequencies: [],
  identifiers: { local: "VTE" },
  name: "San Vicente",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
