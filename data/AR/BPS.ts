import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.9294444444444, -62.0505555555556],
  elevation: 100,
  frequencies: [],
  identifiers: { local: "BPS" },
  name: "Brinkmann / Pablo Sierra Aeroaplicaciones",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
