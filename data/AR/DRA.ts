import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.74961, -62.33392],
  elevation: 317,
  frequencies: [],
  identifiers: { local: "DRA" },
  name: "Saavedra",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["02", "20"] },
    { type: "dirt", orientations: ["06", "24"] },
  ],
});
