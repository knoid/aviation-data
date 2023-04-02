import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.975, -57.9625],
  elevation: 7,
  frequencies: [],
  identifiers: { local: "ELZ" },
  name: "Elizalde",
  radio_helpers: [],
  reference: { direction: "SSW", distance: 1.1 },
  runways: [
    { type: "dirt", orientations: ["07", "25"] },
    { type: "dirt", orientations: ["17", "35"] },
  ],
});
