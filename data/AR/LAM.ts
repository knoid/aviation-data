import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.2261111111111, -61.2788888888889],
  elevation: 171,
  frequencies: [],
  identifiers: { local: "LAM" },
  name: "General la Madrid",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
