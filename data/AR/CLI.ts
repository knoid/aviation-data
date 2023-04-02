import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-23.7816666666667, -64.7497222222222],
  elevation: 442,
  frequencies: [],
  identifiers: { local: "CLI" },
  name: "Calilegua",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.92 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
