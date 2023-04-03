import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.9775, -58.5222222222222],
  elevation: 7,
  frequencies: [],
  identifiers: { local: "GLM" },
  name: "Gualeguaychú / Blm Cabañas",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 1.2 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
