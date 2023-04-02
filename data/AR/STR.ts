import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-36.5422222222222, -56.7213888888889],
  elevation: 3,
  frequencies: [{ type: "AFIS", frequency: 122.1 }],
  identifiers: { icao: "SAZL", local: "STR", iata: "SST" },
  name: "Santa Teresita",
  radio_helpers: [{ type: "NDB", frequency: 365 }],
  reference: { direction: "W", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
