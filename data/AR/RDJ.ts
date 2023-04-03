import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.82771, -60.78168],
  elevation: 25,
  frequencies: [],
  identifiers: { local: "RDJ" },
  name: "Ricardone / Don José",
  radio_helpers: [],
  reference: { direction: "NE", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
