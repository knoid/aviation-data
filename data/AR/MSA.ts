import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.44932, -60.16088],
  elevation: 50,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MSA" },
  name: "25 De Mayo / Servicio Agroaereos",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
