import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-40.7505555555556, -65.0352777777778],
  elevation: 26,
  frequencies: [{ type: "AFIS", frequency: 118.4 }],
  identifiers: { icao: "SAVN", local: "SAN", iata: "OES" },
  name: "San Antonio Oeste / Antoine de Saint Exupery",
  radio_helpers: [],
  reference: { direction: "SW", distance: 5.4 },
  runways: [{ type: "asphalt", orientations: ["12", "30"] }],
});
