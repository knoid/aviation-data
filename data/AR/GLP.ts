import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.9414, -58.56483],
  elevation: 20,
  frequencies: [],
  identifiers: { local: "GLP" },
  name: "Gualeguaychú / Ea la Providencia",
  radio_helpers: [],
  reference: { direction: "N", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
