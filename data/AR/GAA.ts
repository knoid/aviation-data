import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-33.03832, -59.43992],
  elevation: 16,
  frequencies: [{ type: "COM", frequency: 123.45 }],
  identifiers: { local: "GAA" },
  name: "Gualeguay / Agro Aéreo Gualeguay",
  radio_helpers: [],
  reference: { direction: "NW", distance: 9.2 },
  runways: [{ type: "dirt", orientations: ["10", "28"] }],
});
