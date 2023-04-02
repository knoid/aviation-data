import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.99773, -62.70635],
  elevation: 95,
  frequencies: [],
  identifiers: { local: "ATN" },
  name: "Trenque Lauquen / La Argentina",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
