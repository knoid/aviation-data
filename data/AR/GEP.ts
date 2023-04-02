import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.9747222222222, -58.2538888888889],
  elevation: 27,
  frequencies: [],
  identifiers: { local: "GEP" },
  name: "Gualeguaychú / El Potrero",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 13 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
