import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.15666, -58.76087],
  elevation: 80,
  frequencies: [],
  identifiers: { local: "NIK" },
  name: "Lobería / Nika",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
