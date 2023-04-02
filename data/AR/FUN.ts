import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.37934, -64.37973],
  elevation: 689,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "FUN" },
  name: "Dean Funes",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
