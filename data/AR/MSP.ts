import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.79759, -58.89693],
  elevation: 28,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "MSP" },
  name: "Marcos paz",
  radio_helpers: [],
  reference: { direction: "E", distance: 3.5 },
  runways: [{ type: "dirt", orientations: ["14", "32"] }],
});
