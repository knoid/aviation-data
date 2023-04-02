import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.9702777777778, -62.7719444444444],
  elevation: 92,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TQL" },
  name: "Trenque Lauquen / Ñanco Lauquen",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.9 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
