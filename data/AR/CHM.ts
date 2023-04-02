import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.4441666666667, -70.2230555555556],
  elevation: 850,
  frequencies: [],
  identifiers: { icao: "SAHC", local: "CHM", iata: "HOS" },
  name: "Chos Malal",
  radio_helpers: [],
  reference: { direction: "S", distance: 5.4 },
  runways: [{ type: "asphalt", orientations: ["12", "30"] }],
});
