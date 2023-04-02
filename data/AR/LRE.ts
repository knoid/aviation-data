import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.73288, -64.88463],
  elevation: 530,
  frequencies: [],
  identifiers: { local: "LRE" },
  name: "La Ramada de Abajo / Don Emilio",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
