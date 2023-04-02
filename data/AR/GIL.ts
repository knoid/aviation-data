import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.4702777777778, -59.4247222222222],
  elevation: 51,
  frequencies: [{ type: "COM", frequency: 118.2 }],
  identifiers: { local: "GIL" },
  name: "San Andrés de Giles",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
