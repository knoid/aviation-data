import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-44.5727777777778, -65.3705555555556],
  elevation: 14,
  frequencies: [],
  identifiers: { local: "LAE" },
  name: "Punta Roja / Estancia la Elba",
  radio_helpers: [],
  reference: { direction: "NE", distance: 20 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
