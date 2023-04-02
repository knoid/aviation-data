import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.60439, -59.81676],
  elevation: 45,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SDL" },
  name: "Saladillo",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.2 },
  runways: [
    { type: "concrete", orientations: ["18", "36"] },
    { type: "dirt", orientations: ["13", "31"] },
  ],
});
