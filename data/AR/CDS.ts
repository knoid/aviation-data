import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "private",
  controlled: false,
  coordinates: [-46.5380555555556, -67.5597222222222],
  elevation: 90,
  frequencies: [],
  identifiers: { local: "CDS" },
  name: "Cañadón Seco",
  radio_helpers: [],
  reference: { direction: "NE", distance: 2.7 },
  runways: [
    { type: "asphalt", orientations: ["06", "24"] },
    { type: "asphalt", orientations: ["10", "28"] },
  ],
});
