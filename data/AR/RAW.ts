import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-43.2939162716328, -65.0631902147442],
  elevation: 11,
  frequencies: [],
  identifiers: { local: "RAW" },
  name: "Rawson",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
