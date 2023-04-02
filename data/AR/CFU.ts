import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.2147222222222, -62.7805555555556],
  elevation: 111,
  frequencies: [],
  identifiers: { local: "CFU" },
  name: "Carhué / Fumagro",
  radio_helpers: [],
  reference: { direction: "SW", distance: 2.7 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
