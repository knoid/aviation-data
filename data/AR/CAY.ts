import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.3338888888889, -59.6302777777778],
  elevation: 100,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CAY" },
  name: "San Cayetano",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["08", "26"] },
  ],
});
