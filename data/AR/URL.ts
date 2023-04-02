import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-36.55297, -63.76652],
  elevation: 137,
  frequencies: [],
  identifiers: { local: "URL" },
  name: "Uriburu / Estancia los Robles",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 5.4 },
  runways: [{ type: "dirt", orientations: ["17", "35"] }],
});
