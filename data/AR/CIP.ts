import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-38.8927777777778, -67.9888888888889],
  elevation: 270,
  frequencies: [],
  identifiers: { local: "CIP" },
  name: "Cipolletti / Aeroclub",
  radio_helpers: [],
  reference: { direction: "N", distance: 3 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
