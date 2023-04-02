import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.2827777777778, -62.6675],
  elevation: 114,
  frequencies: [],
  identifiers: { local: "RUF" },
  name: "Rufino",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 2.7 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["09", "27"] },
  ],
});
