import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.5422222222222, -58.0519444444444],
  elevation: 10,
  frequencies: [{ type: "COM", frequency: 123.2 }],
  identifiers: { local: "MUS" },
  name: "Chascomús",
  radio_helpers: [],
  reference: { direction: "NW", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["04", "22"] }],
});
