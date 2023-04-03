import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.6802777777778, -59.0358333333333],
  elevation: 28,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "GEZ" },
  name: "General Rodríguez / EAA",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
