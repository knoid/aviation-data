import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.6280555555556, -66.3427777777778],
  elevation: 900,
  frequencies: [],
  identifiers: { local: "AND" },
  name: "Andalgalá",
  radio_helpers: [],
  reference: { direction: "W", distance: 0.54 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
