import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-37.4627777777778, -58.1883333333333],
  elevation: 64,
  frequencies: [],
  identifiers: { local: "BLA" },
  name: "Balcarce / Ea. la Alborada",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 23 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
