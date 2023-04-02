import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.3169444444444, -62.0191666666667],
  elevation: 106,
  frequencies: [],
  identifiers: { local: "SGE" },
  name: "San Gregorio",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
