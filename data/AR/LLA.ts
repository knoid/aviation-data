import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-24.7488888888889, -64.235],
  elevation: 492,
  frequencies: [],
  identifiers: { local: "LLA" },
  name: "Las Lajitas / Aerosoluciones",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
