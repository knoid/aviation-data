import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.7661111111111, -60.5672222222222],
  elevation: 55,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SJT" },
  name: "San Justo / Santa fe",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
