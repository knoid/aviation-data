import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.13544, -63.36237],
  elevation: 137,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { icao: "SAOL", local: "LYE" },
  name: "Laboulaye",
  radio_helpers: [{ type: "VOR", frequency: 116.3 }],
  reference: { direction: "E", distance: 1.5 },
  runways: [{ type: "asphalt", orientations: ["18", "36"] }],
});
