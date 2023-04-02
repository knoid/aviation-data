import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.2630555555556, -59.0936111111111],
  elevation: 165,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "NDL" },
  name: "Tandil / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NNE", distance: 3.8 },
  runways: [
    { type: "dirt", orientations: ["06", "24"] },
    { type: "dirt", orientations: ["18", "36"] },
  ],
});
