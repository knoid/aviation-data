import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-35.97895, -59.90699],
  elevation: 50,
  frequencies: [],
  identifiers: { local: "GAR" },
  name: "General Alvear",
  radio_helpers: [],
  reference: { direction: "NE", distance: 6.2 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
