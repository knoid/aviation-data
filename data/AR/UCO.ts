import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.6072222222222, -60.4097222222222],
  elevation: 69,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "UCO" },
  name: "Chacabuco",
  radio_helpers: [],
  reference: { direction: "NE", distance: 3.8 },
  runways: [
    { type: "dirt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["01", "19"] },
  ],
});
