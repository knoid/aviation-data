import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.1866, -64.08135],
  elevation: 1184,
  frequencies: [],
  identifiers: { local: "JGA" },
  name: "Joaquín V. González / Agropecuaria Río Juramento",
  radio_helpers: [],
  reference: { direction: "SE", distance: 4.3 },
  runways: [{ type: "asphalt", orientations: ["11", "29"] }],
});
