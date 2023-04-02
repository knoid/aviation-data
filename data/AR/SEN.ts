import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.18174, -58.29517],
  elevation: 16,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SEN" },
  name: "Coronel Brandsen",
  radio_helpers: [],
  reference: { direction: "W", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
