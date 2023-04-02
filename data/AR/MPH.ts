import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.0283333333333, -57.6397222222222],
  elevation: 35,
  frequencies: [],
  identifiers: { local: "MPH" },
  name: "Mar del Plata / Parque Hermoso",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["13", "31"] }],
});
