import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: true,
  coordinates: [-34.56, -58.7897222222222],
  elevation: 32,
  frequencies: [
    { type: "APP", frequency: 119.7 },
    { type: "TWR", frequency: 119.7 },
  ],
  identifiers: { icao: "SADJ", local: "ENO" },
  name: "Mariano Moreno",
  radio_helpers: [],
  reference: { direction: "S", distance: 3.8 },
  runways: [{ type: "asphalt", orientations: ["16", "34"] }],
});
