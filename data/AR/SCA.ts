import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.9572222222222, -61.5288888888889],
  elevation: 91,
  frequencies: [{ type: "COM", frequency: 122.8 }],
  identifiers: { icao: "SAFS", local: "SCA", iata: "NCJ" },
  name: "Sunchales / Aeroclub",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 1.1 },
  runways: [{ type: "concrete", orientations: ["11", "29"] }],
});
