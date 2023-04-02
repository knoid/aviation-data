import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.44195, -64.25847],
  elevation: 486,
  frequencies: [],
  identifiers: { icao: "SACA", local: "FMA" },
  name: "Córdoba / Capitán D. Omar Darío Gelardi",
  radio_helpers: [],
  reference: { direction: "SW", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
