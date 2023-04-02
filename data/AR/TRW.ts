import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-43.23564, -65.32414],
  elevation: 39,
  frequencies: [],
  identifiers: { local: "TRW" },
  name: "Trelew / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.3 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
