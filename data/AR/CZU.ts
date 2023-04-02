import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-29.7788888888889, -58.0969444444444],
  elevation: 80,
  frequencies: [],
  identifiers: { local: "CZU" },
  name: "Curuzú Cuatiá / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NW", distance: 0.81 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
