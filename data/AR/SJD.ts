import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.27423, -63.85751],
  elevation: 423,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SJD" },
  name: "San José De la Dormida",
  radio_helpers: [],
  reference: { direction: "NE", distance: 5.9 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
