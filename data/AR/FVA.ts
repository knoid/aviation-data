import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.8266666666667, -58.3166666666667],
  elevation: 16,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "FVA" },
  name: "Florencio Varela / El Pájaro",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
