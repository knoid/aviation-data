import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.0355555555556, -64.1911111111111],
  elevation: 489,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MOI" },
  name: "Corralito / Don Moisés",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.81 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["01", "19"] },
  ],
});
