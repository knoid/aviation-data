import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-29.60179, -58.02205],
  elevation: 82,
  frequencies: [],
  identifiers: { local: "HSJ" },
  name: "Curuzú Cuatiá / Estancia San Juan",
  radio_helpers: [],
  reference: { direction: "N", distance: 11 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
