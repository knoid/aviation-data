import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-23.15221, -64.3288],
  elevation: 357,
  frequencies: [],
  identifiers: { icao: "SASO", local: "ORA", iata: "ORA" },
  name: "Orán",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.3 },
  runways: [{ type: "asphalt", orientations: ["02", "20"] }],
});
