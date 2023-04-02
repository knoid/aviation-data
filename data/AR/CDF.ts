import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-45.77833333, -67.37361111],
  frequencies: [{ type: "TWR", frequency: 119.9 }],
  identifiers: { local: "CDF" },
  name: "Stol Comodoro Rivadavia / Chacras del Faro (cdf)",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
