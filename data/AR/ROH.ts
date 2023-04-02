import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.13652, -61.99028],
  elevation: 102,
  frequencies: [],
  identifiers: { local: "ROH" },
  name: "Roberts / Fumigaciones Herbinsec",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.97 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
