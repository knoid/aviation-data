import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-41.09725, -71.17678],
  elevation: 780,
  frequencies: [],
  identifiers: { local: "LNH" },
  name: "Lago Nahuel Huapi",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 5.9 },
  runways: [{ type: "dirt", orientations: ["12", "30"] }],
});
