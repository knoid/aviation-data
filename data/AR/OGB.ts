import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.30609, -60.6561],
  elevation: 52,
  frequencies: [],
  identifiers: { local: "OGB" },
  name: "Coronel Bogado / Aerofumigaciones don Alejandro",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 5.9 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
