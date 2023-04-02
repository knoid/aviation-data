import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-54.49961, -67.17226],
  elevation: 213,
  frequencies: [],
  identifiers: { local: "THN" },
  name: "Tolhuin",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0.81 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
