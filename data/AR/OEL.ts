import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-39.2863888888889, -65.61],
  elevation: 196,
  frequencies: [{ type: "AFIS", frequency: 122.3 }],
  identifiers: { local: "OEL" },
  name: "Choele Choel",
  radio_helpers: [{ type: "VOR/DME", frequency: 113.4 }],
  reference: { direction: "E", distance: 1.9 },
  runways: [{ type: "asphalt", orientations: ["09", "27"] }],
});
