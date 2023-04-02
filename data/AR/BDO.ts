import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.82122, -59.49279],
  elevation: 29,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "BDO" },
  name: "Baradero",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
