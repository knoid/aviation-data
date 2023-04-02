import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.77872, -61.97609],
  elevation: 110,
  frequencies: [],
  identifiers: { local: "VTS" },
  name: "Venado Tuerto / Savesa",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["05", "23"] }],
});
