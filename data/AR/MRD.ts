import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.6388888888889, -59.4552777777778],
  elevation: 42,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MRD" },
  name: "Mercedes",
  radio_helpers: [],
  reference: { direction: "NW", distance: 1.3 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["10", "28"] },
  ],
});
