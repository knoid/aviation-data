import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.7439, -58.68099],
  elevation: 6,
  frequencies: [],
  identifiers: { local: "IBY" },
  name: "Islas del Ibicuy",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
