import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.67385, -66.02481],
  elevation: 1800,
  frequencies: [],
  identifiers: { local: "SMC" },
  name: "Santa María",
  radio_helpers: [],
  reference: { direction: "ENE", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
