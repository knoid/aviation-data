import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.42909, -61.51124],
  elevation: 105,
  frequencies: [],
  identifiers: { local: "FAE" },
  name: "Firmat / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
