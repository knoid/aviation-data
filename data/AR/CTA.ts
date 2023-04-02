import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.74354, -60.55343],
  elevation: 51,
  frequencies: [],
  identifiers: { local: "CTA" },
  name: "Copetonas",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["13", "31"] }],
});
