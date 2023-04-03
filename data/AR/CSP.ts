import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.0402777777778, -59.6944444444444],
  elevation: 45,
  frequencies: [],
  identifiers: { local: "CSP" },
  name: "Capitán Sarmiento / San Patricio",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 9 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
