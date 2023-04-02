import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.38986, -61.14256],
  elevation: 50,
  frequencies: [],
  identifiers: { local: "HUM" },
  name: "Humboldt / Establecimiento la Adelita",
  radio_helpers: [],
  reference: { direction: "W", distance: 3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
