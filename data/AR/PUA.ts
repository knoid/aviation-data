import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.5394444444444, -62.7344444444444],
  elevation: 240,
  frequencies: [],
  identifiers: { local: "PUA" },
  name: "Puán",
  radio_helpers: [],
  reference: { direction: "N", distance: 1.6 },
  runways: [
    { type: "dirt", orientations: ["04", "22"] },
    { type: "dirt", orientations: ["14", "32"] },
  ],
});
