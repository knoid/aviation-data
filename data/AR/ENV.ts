import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.58744, -58.819],
  elevation: 57,
  frequencies: [],
  identifiers: { local: "ENV" },
  name: "Riachuelo / Nueva Valencia",
  radio_helpers: [],
  reference: { direction: "S", distance: 7.3 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
