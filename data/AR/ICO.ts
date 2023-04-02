import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-45.9041666666667, -67.5588888888889],
  elevation: 52,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ICO" },
  name: "Comodoro Rivadavia / 13 De Diciembre",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
