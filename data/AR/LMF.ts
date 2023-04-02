import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.07912, -61.31628],
  elevation: 75,
  frequencies: [],
  identifiers: { local: "LMF" },
  name: "Los Molinos / Establecimiento la Florencia",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
