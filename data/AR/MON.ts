import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.3588888888889, -60.9797222222222],
  elevation: 30,
  frequencies: [],
  identifiers: { local: "MON" },
  name: "Monje / Fumigaciones González",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
