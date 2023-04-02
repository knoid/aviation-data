import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.89099, -61.12414],
  elevation: 89,
  frequencies: [],
  identifiers: { local: "CDI" },
  name: "Carcarañá / Di Giuseppe",
  radio_helpers: [],
  reference: { direction: "SE", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
