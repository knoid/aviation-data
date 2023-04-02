import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.3563888888889, -64.9011111111111],
  elevation: 290,
  frequencies: [],
  identifiers: { local: "CVV" },
  name: "Villa Valeria",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
