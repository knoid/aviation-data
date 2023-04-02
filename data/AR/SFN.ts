import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.77908, -62.03107],
  elevation: 86,
  frequencies: [],
  identifiers: { local: "SFN" },
  name: "Selva Nueva / Fumigaciones Nando S.H.",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
