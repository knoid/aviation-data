import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.47884, -58.80453],
  elevation: 33,
  frequencies: [],
  identifiers: { local: "NEI" },
  name: "Necochea / Iriberri",
  radio_helpers: [],
  reference: { direction: "NW", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
