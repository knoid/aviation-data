import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.7033333333333, -59.7252777777778],
  elevation: 27,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "PED" },
  name: "San Pedro",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["10", "28"] },
  ],
});
