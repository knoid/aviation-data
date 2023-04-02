import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.4269444444444, -63.3022222222222],
  elevation: 207,
  frequencies: [],
  identifiers: { local: "VNS" },
  name: "Villa Nueva / Suárez Aviación",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
