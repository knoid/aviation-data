import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "private",
  controlled: false,
  coordinates: [-34.439639, -58.642147],
  elevation: 5,
  frequencies: [],
  identifiers: { local: "HNB" },
  name: "Tigre / Nordelta",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.1 },
  runways: [],
});
