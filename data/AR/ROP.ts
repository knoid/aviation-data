import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.0816666666667, -60.5647222222222],
  elevation: 25,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "ROP" },
  name: "Rosario / Pueblo Esther",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
