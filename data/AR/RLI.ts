import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.93138889, -60.92944444],
  frequencies: [],
  identifiers: { local: "RLI" },
  name: "Roldán / La Ilusión",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
