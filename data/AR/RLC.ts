import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.05892, -64.21277],
  elevation: 165,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "RLC" },
  name: "Realicó",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 3.2 },
  runways: [{ type: "asphalt", orientations: ["14", "32"] }],
});
