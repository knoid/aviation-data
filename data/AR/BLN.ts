import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.7080555555556, -67.095],
  elevation: 1200,
  frequencies: [],
  identifiers: { local: "BLN" },
  name: "Londres / Belén",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
