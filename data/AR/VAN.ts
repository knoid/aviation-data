import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-27.59505, -60.68196],
  elevation: 75,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "VAN" },
  name: "Villa Ángela",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["13", "31"] }],
});
