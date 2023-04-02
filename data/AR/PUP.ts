import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.0077, -61.01765],
  elevation: 61,
  frequencies: [],
  identifiers: { local: "PUP" },
  name: "Pujato / Pettilep",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
