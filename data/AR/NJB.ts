import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.4186111111111, -59.8158333333333],
  elevation: 58,
  frequencies: [],
  identifiers: { local: "NJB" },
  name: "Nogoyá / Juan Carlos Bagur",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
