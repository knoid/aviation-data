import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-41.59138, -65.33991],
  elevation: 210,
  frequencies: [{ type: "AFIS", frequency: 122.1 }],
  identifiers: { icao: "SAVS", local: "SGR", iata: "SGV" },
  name: "Sierra Grande",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.3 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
