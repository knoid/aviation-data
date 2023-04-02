import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.365, -69.3019444444444],
  elevation: 883,
  frequencies: [],
  identifiers: { local: "TXO" },
  name: "El Trapial / Chevron Texaco",
  radio_helpers: [],
  reference: { direction: "W", distance: 11 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
