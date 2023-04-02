import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-40.69909, -66.1573],
  elevation: 192,
  frequencies: [],
  identifiers: { local: "VAL" },
  name: "Valcheta",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
