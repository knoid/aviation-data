import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.1822222222222, -58.2469444444444],
  elevation: 2,
  frequencies: [{ type: "COM", frequency: 122.5 }],
  identifiers: { local: "MGI" },
  name: "Isla Martín García",
  radio_helpers: [],
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
