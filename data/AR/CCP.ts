import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.3447222222222, -65.6169444444444],
  elevation: 386,
  frequencies: [],
  identifiers: { local: "CCP" },
  name: "Concepción",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
