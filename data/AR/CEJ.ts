import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.8697222222222, -64.7458333333333],
  elevation: 346,
  frequencies: [],
  identifiers: { local: "CEJ" },
  name: "Las Cejas / Agroalas S.R.L.",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
