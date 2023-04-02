import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-28.86691, -62.23812],
  elevation: 87,
  frequencies: [],
  identifiers: { local: "ADU" },
  name: "Bandera / Dutto",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
