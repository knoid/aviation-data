import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.67977, -61.95515],
  elevation: 112,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VNO" },
  name: "Venado Tuerto",
  radio_helpers: [],
  reference: { direction: "N", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
