import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.53433, -58.672],
  elevation: 24,
  frequencies: [{ type: "TWR", frequency: 123.8 }],
  identifiers: { icao: "SADO", local: "CPO" },
  name: "Campo de Mayo",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.9 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
