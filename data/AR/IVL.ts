import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.2232, -62.40464],
  elevation: 119,
  frequencies: [],
  identifiers: { local: "IVL" },
  name: "Isla Verde / Biondi",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 1.1 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
