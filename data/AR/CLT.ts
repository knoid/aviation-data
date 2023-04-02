import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.90819, -67.82881],
  elevation: 313,
  frequencies: [],
  identifiers: { local: "CLT", iata: "CCT" },
  name: "Colonia Catriel",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 2.2 },
  runways: [{ type: "asphalt", orientations: ["06", "24"] }],
});
