import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.0386111111111, -57.1363888888889],
  elevation: 7,
  frequencies: [],
  identifiers: { local: "MAD" },
  name: "General Madariaga",
  radio_helpers: [],
  reference: { direction: "S", distance: 2.2 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["06", "24"] },
  ],
});
