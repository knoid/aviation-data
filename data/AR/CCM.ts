import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.56915, -61.36821],
  elevation: 82,
  frequencies: [],
  identifiers: { local: "CCM" },
  name: "Carlos Casares / Malatini",
  radio_helpers: [],
  reference: { direction: "N", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
