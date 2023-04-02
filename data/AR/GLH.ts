import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.9205555555556, -58.9163888888889],
  elevation: 35,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GLH" },
  name: "General las Heras",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["12", "30"] }],
});
