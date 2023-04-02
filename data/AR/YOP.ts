import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.3477777777778, -60.2761111111111],
  elevation: 107,
  frequencies: [],
  identifiers: { local: "YOP" },
  name: "Tres Arroyos / Petrazzini",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["01", "19"] },
    { type: "dirt", orientations: ["08", "26"] },
  ],
});
