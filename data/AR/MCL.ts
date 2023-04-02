import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-31.7302777777778, -64.9877777777778],
  elevation: 970,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MCL" },
  name: "Mina Clavero",
  radio_helpers: [],
  reference: { direction: "E", distance: 0.54 },
  runways: [{ type: "dirt", orientations: ["15", "33"] }],
});
