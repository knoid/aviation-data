import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.995, -64.1402777777778],
  elevation: 84,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAZQ", local: "COL" },
  name: "Río Colorado",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
