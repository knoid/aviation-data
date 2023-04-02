import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.34005, -65.64701],
  elevation: 290,
  frequencies: [],
  identifiers: { local: "CHR" },
  name: "Chacharramendi",
  radio_helpers: [],
  reference: { direction: "SE", distance: 0.27 },
  runways: [{ type: "asphalt", orientations: ["01", "19"] }],
});
