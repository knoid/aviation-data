import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-39.7038888888889, -71.17],
  elevation: 691,
  frequencies: [],
  identifiers: { local: "JAH" },
  name: "Junín de los Andes / Hostería San Huberto",
  radio_helpers: [],
  reference: { direction: "NE", distance: 12 },
  runways: [{ type: "dirt", orientations: ["12", "30"] }],
});
