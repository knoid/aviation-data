import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.8744444444444, -57.9613888888889],
  elevation: 6,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "PTL" },
  name: "Ensenada",
  radio_helpers: [],
  reference: { direction: "N", distance: 2.7 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["11", "29"] },
  ],
});
