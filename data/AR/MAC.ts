import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.14581, -63.67893],
  elevation: 140,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "MAC" },
  name: "Macachín",
  radio_helpers: [],
  reference: { direction: "SW", distance: 0 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
