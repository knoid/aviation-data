import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.09288, -64.42926],
  frequencies: [],
  identifiers: { local: "RIE" },
  name: "Río Cuarto / Estindher",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.9 },
  runways: [{ type: "dirt", orientations: ["18", "36"] }],
});
