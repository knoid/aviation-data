import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-25.281, -58.93781],
  elevation: 98,
  frequencies: [],
  identifiers: { local: "PLS" },
  name: "Pirané / Estancia la Salvación",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 28 },
  runways: [{ type: "dirt", orientations: ["01", "19"] }],
});
