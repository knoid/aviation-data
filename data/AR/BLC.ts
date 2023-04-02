import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.73529, -58.03821],
  elevation: 120,
  frequencies: [],
  identifiers: { local: "BLC" },
  name: "Balcarce / Est. los Cardos",
  radio_helpers: [],
  reference: { direction: "NE", distance: 11 },
  runways: [{ type: "dirt", orientations: ["09", "27"] }],
});
