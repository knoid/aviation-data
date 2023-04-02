import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.30444, -56.88124],
  elevation: 63,
  frequencies: [],
  identifiers: { local: "GSE" },
  name: "Guaviraví / Estancia Santa Elisa",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.7 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
