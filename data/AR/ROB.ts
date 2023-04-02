import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.13588, -61.99718],
  elevation: 99,
  frequencies: [],
  identifiers: { local: "ROB" },
  name: "Roberts / Agroaereo",
  radio_helpers: [],
  reference: { direction: "WNW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
