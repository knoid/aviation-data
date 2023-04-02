import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-41.8427777777778, -65.0822222222222],
  elevation: 36,
  frequencies: [],
  identifiers: { local: "BDR" },
  name: "Bahía Dorada",
  radio_helpers: [],
  reference: { direction: "SE", distance: 19 },
  runways: [{ type: "asphalt", orientations: ["05", "23"] }],
});
