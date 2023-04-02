import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-34.2198, -59.43911],
  elevation: 30,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAAA", local: "SNT" },
  name: "San Antonio de Areco",
  radio_helpers: [{ type: "VOR/DME", frequency: 117.7 }],
  reference: { direction: "NE", distance: 1.6 },
  runways: [{ type: "dirt", orientations: ["07", "25"] }],
});
