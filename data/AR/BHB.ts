import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-38.6719444444444, -62.3525],
  elevation: 15,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "BHB" },
  name: "Bahía Blanca / Aeroclub",
  radio_helpers: [],
  reference: { direction: "NW", distance: 4.9 },
  runways: [
    { type: "dirt", orientations: ["11", "29"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
