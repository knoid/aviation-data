import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-28.6286111111111, -65.1133333333333],
  elevation: 330,
  frequencies: [],
  identifiers: { local: "FRS" },
  name: "Frías",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.1 },
  runways: [{ type: "asphalt", orientations: ["13", "31"] }],
});
