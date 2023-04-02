import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.07559, -60.715],
  elevation: 30,
  frequencies: [],
  identifiers: { local: "PLC" },
  name: "Piñero / Ea. la Carolina",
  radio_helpers: [],
  reference: { direction: "NE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
