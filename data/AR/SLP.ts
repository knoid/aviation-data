import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.59206, -64.22041],
  elevation: 186,
  frequencies: [],
  identifiers: { local: "SLP" },
  name: "Santa Rosa / San Alberto",
  radio_helpers: [],
  reference: { direction: "NE", distance: 5 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
