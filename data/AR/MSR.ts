import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.74683, -65.24549],
  elevation: 472,
  frequencies: [],
  identifiers: { local: "MSR" },
  name: "Mercedes / Ea. Santa Romana",
  radio_helpers: [],
  reference: { direction: "E", distance: 7 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
