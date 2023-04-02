import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.3994444444444, -57.3672222222222],
  elevation: 17,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VNA" },
  name: "Verónica",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.3 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["14", "32"] },
  ],
});
