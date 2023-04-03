import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.11829, -59.08266],
  elevation: 26,
  frequencies: [{ type: "COM", frequency: 123.55 }],
  identifiers: { local: "ATE" },
  name: "Zárate",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3.2 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["09", "27"] },
  ],
});
