import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.2825, -61.5016666666667],
  elevation: 99,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAFR", local: "RLA" },
  name: "Rafaela",
  radio_helpers: [],
  reference: { direction: "S", distance: 1.9 },
  runways: [
    { type: "concrete", orientations: ["01R", "19L"] },
    { type: "dirt", orientations: ["06", "24"] },
    { type: "dirt", orientations: ["01L", "19R"] },
  ],
});
