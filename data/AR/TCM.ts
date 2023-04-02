import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-26.79606, -65.30937],
  elevation: 580,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "TCM" },
  name: "Tucumán / Aeroclub Horco Molle",
  radio_helpers: [],
  reference: { direction: "W", distance: 4.3 },
  runways: [{ type: "dirt", orientations: ["11", "29"] }],
});
