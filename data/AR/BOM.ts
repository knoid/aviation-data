import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.43852, -61.30323],
  elevation: 97,
  frequencies: [],
  identifiers: { local: "BOM" },
  name: "Bombal / Gran Ancona",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
