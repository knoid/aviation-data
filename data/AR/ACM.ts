import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-34.07574, -60.1417],
  elevation: 37,
  frequencies: [],
  identifiers: { local: "ACM" },
  name: "Arrecifes / La Cura Malal",
  radio_helpers: [],
  reference: { direction: "WSW", distance: 2.2 },
  runways: [{ type: "dirt", orientations: ["04", "22"] }],
});
