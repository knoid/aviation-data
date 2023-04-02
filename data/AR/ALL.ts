import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.9583333333333, -67.8027777777778],
  elevation: 290,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ALL" },
  name: "Aeroclub Allen",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
