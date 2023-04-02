import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-26.57916, -64.52869],
  elevation: 318,
  frequencies: [],
  identifiers: { local: "GYT" },
  name: "Gobernador Garmendia / Agro Servicio Yoris",
  radio_helpers: [],
  reference: { direction: "E", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["02", "20"] }],
});
