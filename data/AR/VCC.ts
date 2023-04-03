import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.96101, -61.63335],
  elevation: 103,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VCC" },
  name: "Villa Cañás / S.A. Miguel A. Cardone",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.4 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
