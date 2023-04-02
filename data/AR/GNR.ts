import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-39, -67.6197222222222],
  elevation: 260,
  frequencies: [{ type: "AFIS", frequency: 119.4 }],
  identifiers: { icao: "SAHR", local: "GNR", iata: "GNR" },
  name: "General Roca / Dr. Arturo H. Illia",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.6 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
