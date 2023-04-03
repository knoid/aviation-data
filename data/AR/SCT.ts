import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.2641666666667, -61.22],
  elevation: 74,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SCT" },
  name: "San Cristóbal",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
