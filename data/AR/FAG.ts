import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.8522222222222, -58.7066666666667],
  elevation: 70,
  frequencies: [],
  identifiers: { local: "FAG" },
  name: "Federal / La Angelita",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 7 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
