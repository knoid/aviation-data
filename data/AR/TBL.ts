import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.24383, -61.75915],
  elevation: 111,
  frequencies: [],
  identifiers: { local: "TBL" },
  name: "El Trébol / Burdisso",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
