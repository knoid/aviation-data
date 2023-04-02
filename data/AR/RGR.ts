import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-51.6686111111111, -69.2602777777778],
  elevation: 21,
  frequencies: [],
  identifiers: { local: "RGR" },
  name: "Río Gallegos / Río Chico",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
