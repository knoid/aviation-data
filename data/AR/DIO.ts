import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-37.34678, -58.98268],
  elevation: 193,
  frequencies: [{ type: "COM", frequency: 123 }],
  identifiers: { local: "DIO" },
  name: "Tandil / Comandante Eduardo A. Olivero",
  radio_helpers: [],
  reference: { direction: "ESE", distance: 8.1 },
  runways: [
    { type: "dirt", orientations: ["07", "25"] },
    { type: "dirt", orientations: ["16", "34"] },
  ],
});
