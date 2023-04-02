import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.5230444444444, -62.4523138888889],
  elevation: 247,
  frequencies: [],
  identifiers: { local: "PSA" },
  name: "Pigüé / Servicios Aeronáuticos",
  radio_helpers: [],
  reference: { direction: "NNW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
