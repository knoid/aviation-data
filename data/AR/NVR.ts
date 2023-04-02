import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.0236111111111, -59.2858333333333],
  elevation: 30,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "NVR" },
  name: "Navarro",
  radio_helpers: [],
  reference: { direction: "SW", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
