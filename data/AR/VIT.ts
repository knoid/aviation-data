import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-22.28551, -62.71372],
  elevation: 280,
  frequencies: [],
  identifiers: { local: "VIT" },
  name: "Santa Victoria",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
