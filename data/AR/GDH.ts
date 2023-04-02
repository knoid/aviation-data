import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.745, -63.7961111111111],
  elevation: 274,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GDH" },
  name: "General Deheza",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0.16 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
