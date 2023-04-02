import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.3391, -62.03693],
  elevation: 112,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "CLD" },
  name: "Chañear Ladeado",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
