import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.2111111111111, -62.6311111111111],
  elevation: 113,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MAI" },
  name: "Monte Maíz",
  radio_helpers: [],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
