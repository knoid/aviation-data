import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.6763888888889, -58.7438888888889],
  elevation: 15,
  frequencies: [],
  identifiers: { icao: "SADR", local: "MER" },
  name: "Merlo",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["07", "25"] },
    { type: "dirt", orientations: ["16", "34"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
