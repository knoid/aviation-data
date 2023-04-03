import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.94302, -64.37117],
  elevation: 230,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VMK" },
  name: "Vicuña Mackenna / Martín Fierro",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
