import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-35.08795, -57.94917],
  elevation: 20,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "PBE" },
  name: "Poblet",
  radio_helpers: [],
  reference: { direction: "SE", distance: 1.9 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
