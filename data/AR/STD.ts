import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-40.21038, -62.61747],
  elevation: 28,
  frequencies: [],
  identifiers: { local: "STD" },
  name: "Stroeder",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
