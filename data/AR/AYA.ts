import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.1625, -58.4730555555556],
  elevation: 77,
  frequencies: [],
  identifiers: { local: "AYA" },
  name: "Ayacucho",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.49 },
  runways: [
    { type: "dirt", orientations: ["17", "35"] },
    { type: "dirt", orientations: ["01", "19"] },
  ],
});
