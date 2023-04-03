import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-23.21306, -64.03403],
  elevation: 283,
  frequencies: [],
  identifiers: { local: "SLV" },
  name: "Embarcación / Salvita",
  radio_helpers: [],
  reference: { direction: "E", distance: 3.2 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
