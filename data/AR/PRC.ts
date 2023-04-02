import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.2361111111111, -60.5819444444444],
  elevation: 53,
  frequencies: [],
  identifiers: { local: "PRC" },
  name: "Hunter / Fumigaciones Fredy",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
