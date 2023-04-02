import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-32.684, -62.15772],
  elevation: 110,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { icao: "SAOM", local: "MJZ" },
  name: "Marcos Juárez",
  radio_helpers: [{ type: "VOR", frequency: 114.7 }],
  reference: { direction: "W", distance: 2.7 },
  runways: [{ type: "asphalt", orientations: ["07", "25"] }],
});
