import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.34416, -66.29403],
  elevation: 458,
  frequencies: [],
  identifiers: { icao: "SACT", local: "GOR" },
  name: "Chamical / Gobernador Gordillo",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
