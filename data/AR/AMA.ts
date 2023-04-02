import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.10043, -62.01657],
  elevation: 100,
  frequencies: [],
  identifiers: { local: "AMA" },
  name: "Roberts / La Amalia",
  radio_helpers: [],
  reference: { direction: "NW", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
