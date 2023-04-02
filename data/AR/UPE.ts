import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-31.5927446942257, -60.6769016183929],
  elevation: 18,
  frequencies: [],
  identifiers: { local: "UPE" },
  name: "Santa fe / Guadalupe",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
