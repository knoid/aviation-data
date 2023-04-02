import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.28171, -53.67257],
  elevation: 815,
  frequencies: [{ type: "AFIS", frequency: 122.1 }],
  identifiers: { icao: "SATI", local: "IRI" },
  name: "Bernardo de Yrigoyen",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
