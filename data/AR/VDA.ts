import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.4861111111111, -61.4897222222222],
  elevation: 89,
  frequencies: [],
  identifiers: { local: "VDA" },
  name: "Vedia",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.7 },
  runways: [
    { type: "dirt", orientations: ["09", "27"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
