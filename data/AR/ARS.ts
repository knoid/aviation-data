import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-45.0132, -70.81282],
  elevation: 697,
  frequencies: [{ type: "AFIS", frequency: 118.1 }],
  identifiers: { icao: "SAVR", local: "ARS", iata: "ARR" },
  name: "Alto Río Senguer / D.C. Szlapelis",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
