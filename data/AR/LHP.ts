import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-46.1919444444444, -69.2869444444444],
  elevation: 426,
  frequencies: [],
  identifiers: { local: "LHP" },
  name: "Las Heras / Los Perales",
  radio_helpers: [],
  reference: { direction: "NW", distance: 25 },
  runways: [{ type: "asphalt", orientations: ["08", "26"] }],
});
