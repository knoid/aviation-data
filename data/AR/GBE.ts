import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.75191, -58.46327],
  elevation: 12,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GBE" },
  name: "General Belgrano",
  radio_helpers: [{ type: "VOR", frequency: 115.6 }],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
