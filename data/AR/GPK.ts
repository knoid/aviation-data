import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.2602777777778, -61.4744444444444],
  elevation: 101,
  frequencies: [],
  identifiers: { local: "GPK" },
  name: "General Pinedo / Kalbermatter",
  radio_helpers: [],
  reference: { direction: "NW", distance: 11 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
