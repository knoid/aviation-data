import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.55586, -59.99069],
  elevation: 23,
  frequencies: [],
  identifiers: { local: "SJR" },
  name: "San Javier / Aeroclub",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
