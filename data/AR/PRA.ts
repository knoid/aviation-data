import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.13774, -59.66378],
  elevation: 87,
  frequencies: [],
  identifiers: { local: "PRA" },
  name: "Presidencia Roca / Ea. la Leonor",
  radio_helpers: [],
  reference: { direction: "W", distance: 3.8 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
