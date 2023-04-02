import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-40.7780555555556, -62.9802777777778],
  elevation: 40,
  frequencies: [],
  identifiers: { local: "PAT" },
  name: "Carmen de Patagones",
  radio_helpers: [],
  reference: { direction: "N", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["13", "31"] },
    { type: "dirt", orientations: ["04", "22"] },
  ],
});
