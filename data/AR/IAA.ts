import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.18862, -63.61052],
  elevation: 127,
  frequencies: [],
  identifiers: { local: "IAA" },
  name: "Intendente Alvear / Azcarate Irastorza",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
