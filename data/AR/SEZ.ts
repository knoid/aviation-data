import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.80139, -61.86958],
  elevation: 100,
  frequencies: [],
  identifiers: { local: "SEZ" },
  name: "General Pinto / Alfredo Sánchez",
  radio_helpers: [],
  reference: { direction: "SE", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
