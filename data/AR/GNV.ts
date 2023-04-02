import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.9772222222222, -61.0208333333333],
  elevation: 72,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "GNV" },
  name: "General Viamonte / Los Toldos",
  radio_helpers: [],
  reference: { direction: "NE", distance: 1.7 },
  runways: [
    { type: "dirt", orientations: ["05", "23"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
