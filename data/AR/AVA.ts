import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.04691, -60.59756],
  elevation: 26,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "AVA" },
  name: "Alvear / Aeroparque Rosario",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
