import { defineAirport } from "../../utils";

export default defineAirport({
  type: "airport",
  condition: "public",
  controlled: false,
  coordinates: [-33.3908333333333, -60.1955555555556],
  elevation: 30,
  frequencies: [{ type: "COM", frequency: 123.5 }],
  identifiers: { local: "SNY" },
  name: "San Nicolás de los Arroyos",
  radio_helpers: [],
  reference: { direction: "SSE", distance: 3.2 },
  runways: [
    { type: "asphalt", orientations: ["18", "36"] },
    { type: "dirt", orientations: ["09", "27"] },
  ],
});
