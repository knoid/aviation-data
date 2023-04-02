import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.96254, -68.87395],
  elevation: 942,
  frequencies: [],
  identifiers: { local: "DOP" },
  name: "Mendoza / La Puntilla",
  radio_helpers: [],
  reference: { direction: "SW", distance: 4.6 },
  runways: [{ type: "asphalt", orientations: ["05", "23"] }],
});
