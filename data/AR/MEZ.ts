import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.40103, -64.3003],
  elevation: 510,
  frequencies: [{ type: "COM", frequency: 120.6 }],
  identifiers: { local: "MEZ" },
  name: "Córdoba / La Mezquita",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
