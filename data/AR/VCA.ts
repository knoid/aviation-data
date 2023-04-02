import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.20694, -65.41617],
  elevation: 311,
  frequencies: [],
  identifiers: { local: "VCA" },
  name: "Victorica",
  radio_helpers: [],
  reference: { direction: "NE", distance: 0.65 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
