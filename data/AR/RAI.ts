import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.5686111111111, -58.4402777777778],
  elevation: 18,
  frequencies: [],
  identifiers: { local: "RAI" },
  name: "Ranchos / La Igualdad",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
