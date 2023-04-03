import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-30.56944444, -58.5025],
  frequencies: [],
  identifiers: { local: "SJF" },
  name: "San José De Feliciano / Tres Vertientes",
  radio_helpers: [],
  runways: [{ type: "dirt", orientations: ["06", "24"] }],
});
