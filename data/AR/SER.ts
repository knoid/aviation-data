import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.57978, -60.90944],
  elevation: 37,
  frequencies: [],
  identifiers: { local: "SER" },
  name: "Serodino / Fumigaciones Stadler",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
