import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-40.19232, -70.01075],
  elevation: 649,
  frequencies: [],
  identifiers: { icao: "SAVA", local: "AGI" },
  name: "Piedra del Águila",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 9.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
