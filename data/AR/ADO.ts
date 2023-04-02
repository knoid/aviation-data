import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-47.73511, -65.9041],
  elevation: 82,
  frequencies: [],
  identifiers: { icao: "SAWD", local: "ADO", iata: "PUD" },
  name: "Puerto Deseado",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
