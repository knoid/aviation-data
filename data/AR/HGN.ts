import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.582445, -58.374528],
  elevation: 13,
  frequencies: [],
  identifiers: { local: "HGN" },
  name: "Buenos Aires / Centinela",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0 },
  runways: [],
});
