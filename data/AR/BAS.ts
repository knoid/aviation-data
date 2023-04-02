import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.3616, -58.8816],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "BAS" },
  name: "Basavilbaso",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
