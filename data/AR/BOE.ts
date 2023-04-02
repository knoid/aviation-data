import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-30.73091, -62.00809],
  elevation: 96,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "BOE" },
  name: "Morteros / Aeroboero",
  radio_helpers: [],
  reference: { direction: "S", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
