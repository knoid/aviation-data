import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.2068, -68.49242],
  elevation: 665,
  frequencies: [{ type: "COM", frequency: 123.4 }],
  identifiers: { local: "RAE" },
  name: "Rivadavia / Aerotec",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
