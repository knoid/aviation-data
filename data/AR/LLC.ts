import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.8625, -58.3447222222222],
  elevation: 28,
  frequencies: [],
  identifiers: { local: "LLC" },
  name: "Longchamps / La Caída",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
