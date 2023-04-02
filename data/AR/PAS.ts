import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.10957, -62.21764],
  elevation: 107,
  frequencies: [],
  identifiers: { local: "PAS" },
  name: "Pasteur / Las Lilas",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
