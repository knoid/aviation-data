import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.0352777777778, -61.1777777777778],
  elevation: 41,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VEZ" },
  name: "Gálvez",
  radio_helpers: [],
  reference: { direction: "E", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["05", "23"] },
  ],
});
