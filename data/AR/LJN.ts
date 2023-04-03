import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.5505555555556, -59.0791666666667],
  elevation: 25,
  frequencies: [{ type: "COM", frequency: 120.2 }],
  identifiers: { local: "LJN" },
  name: "Luján",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
