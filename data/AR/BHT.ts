import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.33147, -60.57884],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "BHT" },
  name: "Bragado / Haras Trelliris",
  radio_helpers: [],
  reference: { direction: "S", distance: 6.5 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
