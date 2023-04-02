import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.58417, -61.84167],
  elevation: 19,
  frequencies: [],
  identifiers: { local: "OCA" },
  name: "Montes de oca",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
