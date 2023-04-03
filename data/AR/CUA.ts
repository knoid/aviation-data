import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.1605555555556, -64.3372222222222],
  elevation: 424,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CUA" },
  name: "Río Cuarto / Aeroclub",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 2.2 },
  runways: [
    { type: "asphalt", orientations: ["01L", "19R"] },
    { type: "dirt", orientations: ["01R", "19L"] },
  ],
});
