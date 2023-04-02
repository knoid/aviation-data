import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.9947222222222, -61.6027777777778],
  elevation: 71,
  frequencies: [],
  identifiers: { local: "RST" },
  name: "Cañada Rosquín / Stiefel",
  radio_helpers: [],
  reference: { direction: "N", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
