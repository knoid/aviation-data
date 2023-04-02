import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.4733333333333, -60.8452777777778],
  elevation: 38,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "EPZ" },
  name: "Esperanza",
  radio_helpers: [],
  reference: { direction: "E", distance: 4.3 },
  runways: [
    { type: "dirt", orientations: ["06", "24"] },
    { type: "dirt", orientations: ["15", "33"] },
  ],
});
