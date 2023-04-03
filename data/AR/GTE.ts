import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.70516, -63.55708],
  elevation: 175,
  frequencies: [],
  identifiers: { local: "GTE" },
  name: "Guatraché",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
