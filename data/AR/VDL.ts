import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.4677777777778, -57.7672222222222],
  elevation: 26,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VDL" },
  name: "Coronel Vidal",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 2 },
  runways: [
    { type: "dirt", orientations: ["10", "28"] },
    { type: "dirt", orientations: ["15", "33"] },
  ],
});
