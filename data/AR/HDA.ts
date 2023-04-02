import { defineAirport } from "../../utils";

export default defineAirport({
  type: "helipad",
  condition: "public",
  controlled: false,
  coordinates: [-34.627862, -58.351532],
  elevation: 5,
  frequencies: [{ type: "COM", frequency: 127 }],
  identifiers: { local: "HDA" },
  name: "Buenos Aires / Dársena sur",
  radio_helpers: [],
  reference: { direction: "W", distance: 0 },
  runways: [],
});
