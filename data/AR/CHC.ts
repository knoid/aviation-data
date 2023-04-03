import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.53899, -58.29287],
  elevation: 72,
  frequencies: [],
  identifiers: { local: "CHC" },
  name: "Chajarí / Estancia la Choza",
  radio_helpers: [],
  reference: { direction: "NW", distance: 21 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
