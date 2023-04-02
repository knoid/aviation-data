import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-32.3402777777778, -63.6858333333333],
  elevation: 282,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "NAN" },
  name: "Hernando / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
