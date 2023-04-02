import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.7758333333333, -57.6427777777778],
  elevation: 93,
  frequencies: [],
  identifiers: { local: "MEA" },
  name: "Maipú / Establecimiento el Araza",
  radio_helpers: [],
  reference: { direction: "SE", distance: 4.6 },
  runways: [{ type: "dirt", orientations: ["08", "26"] }],
});
