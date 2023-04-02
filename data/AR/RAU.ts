import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.7719, -59.05772],
  elevation: 94,
  frequencies: [],
  identifiers: { local: "RAU" },
  name: "Rauch",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["08", "26"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
