import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-28.5261111111111, -59.0380555555556],
  elevation: 55,
  frequencies: [],
  identifiers: { local: "BTA" },
  name: "Bella Vista (Corrientes)",
  radio_helpers: [],
  runways: [{ type: "asphalt", orientations: ["17", "35"] }],
});
