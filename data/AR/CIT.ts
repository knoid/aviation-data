import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-27.3033333333333, -58.3152777777778],
  elevation: 60,
  frequencies: [],
  identifiers: { local: "CIT" },
  name: "Corrientes / Itatí",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["16", "34"] }],
});
