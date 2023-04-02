import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-39.84555, -70.86537],
  elevation: 691,
  frequencies: [],
  identifiers: { local: "JLA" },
  name: "Junín de los Andes / San Ignacio",
  radio_helpers: [],
  reference: { direction: "NE", distance: 12 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
