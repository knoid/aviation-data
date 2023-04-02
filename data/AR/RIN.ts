import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.3902777777778, -68.9044444444445],
  elevation: 600,
  frequencies: [],
  identifiers: { icao: "SAHS", local: "RIN", iata: "RDS" },
  name: "Rincón de los Sauces",
  radio_helpers: [],
  reference: { direction: "N", distance: 0 },
  runways: [{ type: "asphalt", orientations: ["10", "28"] }],
});
