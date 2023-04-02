import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.1866666666667, -61.0758333333333],
  elevation: 94,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZI", local: "BLR" },
  name: "Bolívar ",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
